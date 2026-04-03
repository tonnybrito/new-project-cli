## Installation
```bash
# Global installation (Automatically manages permissions)
node bin/index.js install

# OR via standard npm
npm i -g new-project-cli
```

## Como usar
```bash
# Crie um novo projeto chamado meu-app
newproj init meu-app          # opcional: --github para criar o repositório no GitHub

# Entre na pasta do projeto
cd meu-app

# Start the application (executes `./startApp.sh`)
# The command `newproj start` runs the script `./startApp.sh`, which starts the development server and opens the application in the default browser
newproj start

# Para recarregar a aplicação, execute o script novamente ou pressione Ctrl+R na janela do navegador
# Caso precise reiniciar o servidor, utilize o comando stop seguido por start

# Pare a aplicação (executa stopApp.sh) – encerra o servidor de desenvolvimento
newproj stop

# Limpe o cache (executa clearCache.sh)
newproj clear
```
