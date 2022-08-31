### Input Number Attributes

| 属性          | 描述                                              | 类型      | 默认值  | 可选值              |
| ------------- | ------------------------------------------------- | --------- | ------- | ------------------- |
| v-model       | 值                                                | `number`  | 0       | -                   |
| name          | 原生属性`name`                                    | `number`  | 5       | -                   |
| disabledInput | 禁用输入框输入                                    | `boolean` | false   | -                   |
| disabled      | 禁用操作                                          | `boolean` | false   | -                   |
| step          | 数字增减的步数                                    | `number`  | 1       | -                   |
| position      | 控制按钮显示位置, 目前除了默认值，只有`right`可填 | `string`  | --      | -                   |
| min           | 最小可输入的数                                    | `number`  | --      | -                   |
| max           | 最大可输入的数                                    | `number`  | --      | -                   |
| size          | 尺寸                                              | `string`  | 默认 md | `lg` `md` `sm` `xs` |

### Input Number Events

| 名称   | 描述           | 回调参数        |
| ------ | -------------- | --------------- |
| change | 值更改触发事件 | (value: number) |
