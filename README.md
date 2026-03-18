# new-project-cli

> A simple CLI tool for scaffolding new projects with a predefined template.

## Features
- **Global command**: `newproj` available after `npm i -g new-project-cli`.
- **Commands**:
  - `newproj init <name>` – Creates a new project folder, copies the template, installs dependencies, and initializes a git repo.
  - `newproj start` – Executes `./startApp.sh` inside the current project.
  - `newproj stop` – Executes `./stopApp.sh`.
  - `newproj clear` – Executes `./clearCache.sh`.
- **Documentation**: A multilingual guide in `docs/setup.html` with a language selector.
- **Template**: The scaffold contains `builds`, `Commits`, `docs`, and shell scripts for managing the app.

## Installation
```bash
npm i -g new-project-cli
```

## Usage
```bash
# Create a new project
newproj init my-app --github   # Optional GitHub repo creation

# Inside the project folder
cd my-app
newproj start   # Start the app
newproj stop    # Stop the app
newproj clear   # Clear cache
```

## Contributing
Feel free to open issues or PRs. Please follow the standard commit style used in the repo.

---

Generated with [Claude Code](https://claude.com/claude-code).