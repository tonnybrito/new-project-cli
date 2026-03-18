[Português](./README.pt.md) | [English](./README.en.md)

# New-project-cli (Español)

Este CLI genera proyectos a partir de una **plantilla** predefinida.

## Qué es
`new-project-cli` permite crear rápidamente la estructura de un nuevo proyecto (frontend, backend, scripts de compilación, etc.) con un solo comando. Es ideal para:
- *Prototipado rápido* de aplicaciones;
- *Estandarización* de proyectos dentro de equipos;
- *Automatización* de pasos repetitivos (instalar dependencias, inicializar git, crear repositorio en GitHub).

## Qué hace
- **Crear** la estructura del proyecto e instalar dependencias;
- **Gestionar** la aplicación (iniciar, detener, limpiar caché) con scripts simples;
- **Documentar** la instalación y uso en tres idiomas (PT, EN, ES) con cambio fácil de idioma.

## Instalación
```bash
# Instalación global via npm
npm i -g new-project-cli
```

## Cómo usar
```bash
# Crea un nuevo proyecto llamado mi-app
newproj init mi-app          # opcional: --github para crear un repositorio en GitHub

# Entra al directorio del proyecto
cd mi-app

# Inicia la aplicación (ejecuta startApp.sh)
newproj start

# Detén la aplicación (ejecuta stopApp.sh)
newproj stop

# Limpia la caché (ejecuta clearCache.sh)
newproj clear
```

## Documentación en varios idiomas
Visita la página de configuración: `docs/setup.html`. Allí puedes cambiar el idioma (Português, English, Español) y seguir cada paso.

## Contribuyendo
Siéntete libre de abrir *issues* o *pull requests*. Sigue el estilo de commits del repositorio.

---

Creado por Tonny Brito - Devlandia Ltda y generado por Claude Code (2026-03-18).