@echo off
setlocal
echo CAUTION: This will permanently delete the current project folder.
set /p confirm="Are you sure you want to proceed? (y/N): "
if /i "%confirm%" neq "y" (
    echo Deletion cancelled.
    pause
    exit /b
)

echo Deleting project files...
set "projectDir=%~dp0"
set "parentDir=%~dp0.."

cd /d "%parentDir%"
start /b "" cmd /c "timeout /t 2 >nul & rd /s /q \"%projectDir%\""
echo Project folder scheduled for deletion. Please close this terminal window.
exit
