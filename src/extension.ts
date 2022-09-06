// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { LayuiCompletionItemProvider } from './completion/layui-vue-completion-item-povider'
import { LayuiHoverProvier } from './hover/layui-vue-hover-provider'
import { getWebViewContent } from './shared/util';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // 注册 completion 提示
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      [
        {
          language: 'vue',
          scheme: 'file'
        },
        {
          language: 'html',
          scheme: 'file'
        }
      ],
      new LayuiCompletionItemProvider(),
      '',
      ' ',
      ':',
      '<',
      '"',
      "'",
      '/',
      '@',
      '(',
      '-'
    )
  )

  // 注册 hover 提示
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(
      [
        {
          language: 'vue',
          scheme: 'file',
        },
        {
          language: 'html',
          scheme: 'file',
        },
      ],
      new LayuiHoverProvier()
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('extension.layui-icon-doc', (uri) => {
      const panel = vscode.window.createWebviewPanel('webview', 'Layui Icon', vscode.ViewColumn.Beside, {
        enableScripts: true,
        retainContextWhenHidden: false,
      });
      panel.webview.html = getWebViewContent(context, 'resources/layui-icon.html');
      panel.webview.onDidReceiveMessage(
        (message) => {
          
          const { command, text } = message;
          if(command === "alert"){
            vscode.window.showInformationMessage(text);
          }else if(command === "error"){
            vscode.window.showErrorMessage(text);
          }
        },
        undefined,
        context.subscriptions
      );
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
