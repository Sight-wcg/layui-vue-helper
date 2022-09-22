# layui-vue-helper

layui-vue-helper 是 Layui Vue 的开发增强工具，提供代码片段，自动完成，悬浮文档功能

> 本项目 fork 自 [element-ui-helper](https://github.com/HULANG-BTB/element-ui-helper)

## 主要功能

### 代码片段

输入片段触发词，按 `Tab` 切换预设输入点

![代码片段.gif](https://s2.loli.net/2022/06/20/zVxXdkaeEUjK4L5.gif)

| Trigger Key | Tag                     |
|-------------|-------------------------|
| layer-open  | layer-vue 弹层 open()方法|
| layer-load  | layer-vue 弹层 load()方法|
| layer-confirm| layer-vue 弹层 confirm()方法|
| layer-msg   | layer-vue 弹层 msg()方法|
| layer-drawer| layer-vue 弹层 drawer()方法|
| lay-cdn     | layui-vue CDN           |
| lay-cdn-es  | layui-vue ES Module CDN |
| lay-cdn-css | layui-vue css CDN       |
| v-cdn       | Vue 3 CDN               |
| v-cdn-es    | Vue 3 ES Module CDN     |
| !v          | Vue setup 传统模板       |
| !vs         | Vue setup 语法糖模板     |
| !lay-html   | layui-vue-html 模板     |
| !lay-html-es| layui-vue-html-es 模板  |


### 自动补全

* 按 `Ctrl+Space` (Windows, Linux) 或 `Cmd+Space` (macOS) 查看自动补全列表，目前只支持属性和事件补全
* 支持 Vue 和 HTML 文件
* `设置 -> 扩展 -> layui-vue-helper config`, 自定义 `Tag` `Attribute` 自动完成风格
![自动补全.gif](https://s2.loli.net/2022/06/20/LioZGshVlFQYyew.gif)

### 文档悬停提示

* 移动光标到 layui-vue 的 tag 或 prop，显示悬浮文档。
![悬浮提示.gif](https://s2.loli.net/2022/06/20/iKT3gn7bSxVFByX.gif)

### 图标文档

* 按 `Ctrl + Shift + P`，打开命令面板，输入 `layui-icon`, 选择 `Open layui icon document`，打开图标文档
* 支持点击复制图标
![图标](https://s2.loli.net/2022/09/06/hsVgJcaWqAoZG1k.png)

### 

## 问题反馈

如果您有任何问题或改进意见，可以通过 [issues](https://gitee.com/starsatdawn/layui-vue-helper/issues)反馈。

## 更多信息

* 支持 vscode 1.64.0 及以上版本 

* 感谢 [element-ui-helper](https://github.com/HULANG-BTB/element-ui-helper)
