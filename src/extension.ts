// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // register a command that is invoked when the status bar
  // item is selected
  const statusBar = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    9999999999
  );
  statusBar.command = "workbench.action.showCommands";
  statusBar.text = `$(debug-console-evaluation-prompt)`; // https://code.visualstudio.com/api/references/icons-in-labels
  statusBar.backgroundColor = new vscode.ThemeColor(
    "statusBarItem.remoteBackground"
  );
  statusBar.show();
  statusBar.tooltip = "Command Palette";
  context.subscriptions.push(statusBar);
}

// this method is called when your extension is deactivated
export function deactivate() {}
