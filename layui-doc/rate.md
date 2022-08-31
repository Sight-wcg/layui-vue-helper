### Rate Attributes

| 属性        | 描述                                                               | 类型       | 默认值                  | 可选           |
| ----------- | ------------------------------------------------------------------ | ---------- | ----------------------- | -------------- |
| v-model     | 评分值                                                             | `number`   | `0`                     |                |
| length      | 评分长度                                                           | `number`   | `5`                     |                |
| readonly    | 只读模式                                                           | `boolean`  | `false`                 | `true` `false` |
| theme       | 主题颜色                                                           | `string`   | `#ffb800`               |                |
| half        | 设定组件是否可以选择半星                                           | `boolean`  | `false`                 | true` `false`  |
| text        | 是否显示评分对应的内容                                             | `boolean`  | `false`                 | true` `false`  |
| is-block    | 评分是否显示为快元素                                               | `boolean`  | `false`                 | true` `false`  |
| allow-clear | 评分是否需要清除功能                                               | `boolean`  | `false`                 | true` `false`  |
| clear-icon  | 评分清除功能使用的图标`class`                                      | `string`   | `layui-icon-close-fill` |                |
| icons       | 评分使用图标`class`；`["空心", "实心"]`/`["空心", "半心", "实心"]` | `string[]` | 星型                    |                |

### Rate Slots

| 属性    | 描述                             | 参数      |
| ------- | -------------------------------- | --------- |
| default | 默认插槽，自定义内容时可以使用为 | { value } |

### Rate Events

| 属性   | 描述             | 回调参数        |
| ------ | ---------------- | --------------- |
| select | 选中之后触发事件 | (value: number) |
| clear  | 清除之后触发事件 | (value: number) |
