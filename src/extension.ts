// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import OrmEditor from './view/orm/ormEditor';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "bknife-tool" is now active!');


	const ormEditorUri = vscode.Uri.file(
		path.join(context.extensionPath, 'dist', 'ormEditor', 'app.js')
	);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	context.subscriptions.push(vscode.commands.registerCommand('bknife.orm.open', () => {
		vscode.window.createWebviewPanel("bknife.orm.editor", "test", vscode.ViewColumn.One, {});
	}));

	context.subscriptions.push(vscode.window.registerCustomEditorProvider("bknife.orm.editor", new OrmEditor(ormEditorUri)));
}

// this method is called when your extension is deactivated
export function deactivate() { }
