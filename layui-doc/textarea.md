### Textarea Attributes

| 属性        | 描述          | 类型      | 默认值  | 可选值         |
| ----------- | ------------- | --------- | ------- | -------------- |
| name        | 原始属性 name | `string`  | -       | -              |
| placeholder | 提示信息      | `string`  | -       | -              |
| disabled    | 禁用          | `boolean` | `false` | `true` `false` |
| v-model     | 值            | `string`  | -       | -              |
| show-count  | 显示字数      | `boolean` | `false` | `true` `false` |
| allow-clear | 允许清空      | `boolean` | `false` | `true` `false` |

### Textarea Events

| 事件   | 描述            | 可选值           |
| ------ | --------------- | ---------------- |
| input  | 原生 input 事件 | event : 事件对象 |
| foucs  | 原生 foucs 事件 | event : 事件对象 |
| blur   | 原生 blur 事件  | --               |
| change | 更改回调        | --               |
| clear  | 清空回调        | --               |
