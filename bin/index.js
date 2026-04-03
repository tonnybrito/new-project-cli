#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const os = require('os');
const fse = require('fs-extra');
const { execSync } = require('child_process');

const isAdmin = () => {
  if (process.platform === 'win32') {
    try {
      execSync('net session', { stdio: 'ignore' });
      return true;
    } catch (e) {
      return false;
    }
  }
  return process.getuid && process.getuid() === 0;
};

const resolvePath = (p) => {
  if (p.startsWith('~')) {
    return path.join(os.homedir(), p.slice(1));
  }
  return path.resolve(process.cwd(), p);
};

const program = new Command();

const TEMPLATE_DIR = path.resolve(__dirname, '..', 'templates', 'project-template');

program
  .name('newproj')
  .description('CLI for scaffolding new projects')
  .version('1.0.0');

program
  .command('init <name>')
  .description('Create a new project with given name')
  .option('-g, --github', 'Create GitHub repository using gh')
  .option('-p, --projects-folder <folder>', 'Folder to create the project in')
  .action((name, options) => {
    const baseFolder = options.projectsFolder ? resolvePath(options.projectsFolder) : process.cwd();
    const targetPath = path.join(baseFolder, name);
    
    if (fs.existsSync(targetPath)) {
      console.error(`Folder ${name} already exists at ${baseFolder}.`);
      process.exit(1);
    }
    
    if (!fs.existsSync(baseFolder)) {
      console.log(`Creating base folder: ${baseFolder}`);
      fs.mkdirSync(baseFolder, { recursive: true });
    }

    console.log(`Creating project folder: ${targetPath}`);
    fse.copySync(TEMPLATE_DIR, targetPath);
    console.log('Template copied. Installing dependencies...');
    try {
      execSync('npm install', { cwd: targetPath, stdio: 'inherit' });
    } catch (e) {
      console.error('Failed to install dependencies.');
      process.exit(1);
    }
    console.log('Initializing git repository...');
    try {
      execSync('git init', { cwd: targetPath, stdio: 'inherit' });
    } catch (e) {
      console.error('Failed to init git.');
    }
    if (options.github) {
      try {
        execSync(`gh repo create ${name} --public --confirm`, { cwd: targetPath, stdio: 'inherit' });
      } catch (e) {
        console.error('Failed to create GitHub repo.');
      }
    }
    console.log('Project initialized successfully.');
  });

program
  .command('install')
  .description('Install this CLI globally (requires admin/sudo)')
  .option('-v, --verbose', 'Verbose output')
  .action(() => {
    if (!isAdmin()) {
      console.log('Permission required. Requesting elevation...');
      const command = process.platform === 'win32' 
        ? `powershell -Command "Start-Process 'npm' -ArgumentList 'install -g .' -Verb RunAs -Wait"`
        : `sudo npm install -g .`;
      
      try {
        execSync(command, { stdio: 'inherit' });
        console.log('Installation completed with elevated privileges.');
      } catch (e) {
        console.error('Elevation failed or was cancelled.');
        process.exit(1);
      }
    } else {
      console.log('Executing global installation...');
      try {
        execSync('npm install -g .', { stdio: 'inherit' });
        console.log('Installation successful.');
      } catch (e) {
        console.error('Installation failed.');
        process.exit(1);
      }
    }
  });

const runScript = (scriptName) => {
  const isWin = process.platform === 'win32';
  const scriptFile = isWin ? `${scriptName}.bat` : `${scriptName}.sh`;
  const scriptPath = path.resolve(process.cwd(), scriptFile);
  
  if (!fs.existsSync(scriptPath)) {
    console.error(`${scriptFile} not found in current directory.`);
    process.exit(1);
  }
  
  try {
    const cmd = isWin ? `call "${scriptPath}"` : `bash "${scriptPath}"`;
    execSync(cmd, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Failed to execute ${scriptFile}`);
  }
};

program
  .command('start')
  .description('Run startApp script (startApp.sh or startApp.bat)')
  .action(() => runScript('startApp'));

program
  .command('stop')
  .description('Run stopApp script (stopApp.sh or stopApp.bat)')
  .action(() => runScript('stopApp'));

program
  .command('clear')
  .description('Run clearCache script (clearCache.sh or clearCache.bat)')
  .action(() => runScript('clearCache'));

program
  .command('destroy')
  .description('Delete the current project permanently (run deleteProject script)')
  .action(() => runScript('deleteProject'));

program.parse(process.argv);
