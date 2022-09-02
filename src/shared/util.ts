import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
/**
 * 驼峰转横线
 *
 * @param str 待转换的串
 */
export const toKebabCase = (str: string | undefined) => {
  if (str === undefined) {
    return '';
  }
  var temp = str.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase();
  });
  if (temp.slice(0, 1) === '-') {
    //如果首字母是大写，执行replace时会多一个_，这里需要去掉
    temp = temp.slice(1);
  }
  return temp;
};

export function toCamelCase(str: string) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
}

export function toPascalCase(str: string) {
  return capitalize(toCamelCase(str));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 从某个HTML文件读取能被Webview加载的HTML内容
 * @param {*} context 上下文
 * @param {*} templatePath 相对于插件根目录的html文件相对路径
 */
export function getWebViewContent(context: vscode.ExtensionContext, templatePath: string) {
  const resourcePath = path.join(context.extensionPath, templatePath);
  const dirPath = path.dirname(resourcePath);
  let html = fs.readFileSync(resourcePath, 'utf-8');
  // vscode不支持直接加载本地资源，需要替换成其专有路径格式，这里只是简单的将样式和JS的路径替换
  html = html.replace(/(<link.+?href="|<script.+?src="|<img.+?src=")(.+?)"/g, (m, $1, $2) => {
    return $1 + vscode.Uri.file(path.resolve(dirPath, $2)).with({ scheme: 'vscode-resource' }).toString() + '"';
  });
  return html;
}
