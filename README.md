# new-project-cli

A ferramenta CLI que gera projetos a partir de um **template** pré‑definido.

## O que é
`new-project-cli` permite criar rapidamente a estrutura de um novo projeto (frontend, backend, scripts de build, etc.) com um único comando. Ele é ideal para:

- *Prototipagem rápida* de aplicativos;
- *Padronização* de projetos dentro de equipes;
- *Automatização* de etapas repetitivas (instalação de dependências, inicialização de git, criação de repositório GitHub).

## Para que serve
- **Criar** a estrutura do projeto e instalar as dependências;
- **Gerenciar** a aplicação (iniciar, parar, limpar cache) com scripts simples;
- **Documentar** a instalação e uso em três idiomas (PT, EN, ES) com fácil troca de idioma.

## Instalação
```bash
# Instalação global via npm
npm i -g new-project-cli
```

## Como usar
```bash
# Crie um novo projeto chamado meu-app
newproj init meu-app          # opcional: --github para criar o repositório no GitHub

# Entre na pasta do projeto
cd meu-app

# Inicie a aplicação (executa startApp.sh)
newproj start

# Pare a aplicação (executa stopApp.sh)
newproj stop

# Limpe o cache (executa clearCache.sh)
newproj clear
```

## Documentação em múltiplos idiomas
Visite a página de configuração: `docs/setup.html`. Lá você pode trocar o idioma (Português, English, Español) e acompanhar cada passo.

## Contribuindo
Sinta‑se à vontade para abrir *issues* ou *pull requests*. Siga o padrão de commits do repositório.

---

Gerado com [Claude Code](https://claude.com/claude-code).