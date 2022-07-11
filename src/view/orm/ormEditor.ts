import * as vscode from 'vscode';
import * as path from 'path';
import GetWebViewContent from '../GetWebViewContent';

class OrmEditor implements vscode.CustomTextEditorProvider {

    htmlUri: vscode.Uri;

    constructor(htmlUri: vscode.Uri)
    {
        this.htmlUri = htmlUri;
    }

    public async resolveCustomTextEditor(document: vscode.TextDocument, webviewPanel: vscode.WebviewPanel, token: vscode.CancellationToken): Promise<void> {
        webviewPanel.webview.options = {
            enableScripts: true
        };

        const htmlSrc = webviewPanel.webview.asWebviewUri(this.htmlUri);
        webviewPanel.webview.html = GetWebViewContent("orm edit", htmlSrc.toString());

        webviewPanel.webview.onDidReceiveMessage(function (e) {
            console.log(e);
        });

        function updateView() {
            webviewPanel.webview.postMessage({
                type: 'update',
                text: document.getText(),
            });
        }

        let onChangeEvent = vscode.workspace.onDidChangeTextDocument((e) => {
            if (e.document.uri.toString() === document.uri.toString()) {
                updateView();
            }
        });

        webviewPanel.onDidDispose(() => {
            onChangeEvent.dispose();
        });

        updateView();
    }

}

export default OrmEditor;