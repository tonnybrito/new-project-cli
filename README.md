[English](./README.en.md) | [Español](./README.es.md)

# New-project-cli (Português)

Criado por Tonny Brito - Devlandia Ltda e gerado por Claude Code (2026-03-18).

## O que é
`new-project-cli` permite criar rapidamente a estrutura de um novo projeto (frontend, backend, scripts de build, etc.) com um único comando. Ele é ideal para:
- *Prototipagem rápida* de aplicativos;
- *Padronização* de projetos dentro de equipes;
- *Automatização* de etapas repetitivas (instalar dependências, inicializar git, criar repositório no GitHub).

## O que faz
- **Criar** a estrutura do projeto e instalar dependências;
- **Gerenciar** a aplicação (iniciar, parar, limpar cache) com scripts simples;
- **Documentar** a instalação e uso em três idiomas (PT, EN, ES) com troca fácil de idioma.

## Instalação
```bash
# Instalação global (Gerencia permissões automaticamente)
node bin/index.js install

# OU via npm padrão
npm i -g new-project-cli
```

## Como usar
```bash
# Crie um novo projeto
newproj init "meu-app"

# Crie um projeto em uma pasta específica (Ex: Sandbox)
newproj init "meu-app" --projects-folder ~/"Sandbox"

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

Criado por Tonny Brito - Devlandia Ltda e gerado por Claude Code (2026-03-18).