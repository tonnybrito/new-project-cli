## Como usar
```bash
# Crie um nuevo proyecto llamado mi-app
newproj init mi-app          # opcional: --github para crear un repositorio en GitHub

# Entra al directorio del proyecto
cd mi-app

# Inicie la aplicación (ejecuta `./startApp.sh`)
# El comando `newproj start` ejecuta el script `./startApp.sh`, que inicia el servidor de desarrollo y abre la aplicación en el navegador predeterminado
newproj start

# Para recargar la aplicación, ejecuta el script nuevamente o presiona Ctrl+R en la ventana del navegador
# Si necesitas reiniciar el servidor, usa el comando stop seguido por start

# Detén la aplicación (ejecuta stopApp.sh) – cierra el servidor de desarrollo
newproj stop

# Limpia la caché (ejecuta clearCache.sh)
newproj clear
```
