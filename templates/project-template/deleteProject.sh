#!/bin/bash
# deleteProject.sh - Self-deletion script for Unix-like systems

echo "CAUTION: This will permanently delete the current project folder."
read -p "Are you sure you want to proceed? (y/N): " confirm

if [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]]; then
    echo "Deleting project files..."
    # We use a subshell to delete the directory after the script has started executing
    (sleep 1; cd .. && rm -rf "$PWD") &
    echo "Project folder scheduled for deletion. Please close your terminal if needed."
    exit 0
else
    echo "Deletion cancelled."
fi
