#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const { execSync } = require('child_process');

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
  .action((name, options) => {
    const targetPath = path.resolve(process.cwd(), name);
    if (fs.existsSync(targetPath)) {
      console.error(`Folder ${name} already exists.`);
      process.exit(1);
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
  .command('start')
  .description('Run startApp.sh')
  .action(() => {
    const script = path.resolve(process.cwd(), 'startApp.sh');
    if (!fs.existsSync(script)) {
      console.error('startApp.sh not found in current directory.');
      process.exit(1);
    }
    try {
      execSync(`bash ${script}`, { stdio: 'inherit' });
    } catch (e) {
      console.error('Failed to execute startApp.sh');
    }
  });

program
  .command('stop')
  .description('Run stopApp.sh')
  .action(() => {
    const script = path.resolve(process.cwd(), 'stopApp.sh');
    if (!fs.existsSync(script)) {
      console.error('stopApp.sh not found in current directory.');
      process.exit(1);
    }
    try {
      execSync(`bash ${script}`, { stdio: 'inherit' });
    } catch (e) {
      console.error('Failed to execute stopApp.sh');
    }
  });

program
  .command('clear')
  .description('Run clearCache.sh')
  .action(() => {
    const script = path.resolve(process.cwd(), 'clearCache.sh');
    if (!fs.existsSync(script)) {
      console.error('clearCache.sh not found in current directory.');
      process.exit(1);
    }
    try {
      execSync(`bash ${script}`, { stdio: 'inherit' });
    } catch (e) {
      console.error('Failed to execute clearCache.sh');
    }
  });

program.parse(process.argv);
