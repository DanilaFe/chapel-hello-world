const vscode = require('vscode');

function activate() {
  const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
  if (workspaceFolder) {
    const readmePath = vscode.Uri.joinPath(workspaceFolder.uri, 'README.md');
    vscode.commands.executeCommand('markdown.showPreview', readmePath);
  }
}

module.exports = { activate };
