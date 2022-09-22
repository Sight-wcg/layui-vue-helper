### Tag Attributes

| 属性     | 描述           | 类型      | 默认值   | 可选值                             |
| -------- | -------------- | --------- | -------- | ---------------------------------- |
| type     | 标签类型       | `string`  | -        | `primary` `normal` `warm` `danger` |
| size     | 标签大小       | `string`  | `md`     | `lg` `md` `sm` `xs`                |
| color    | 自定义标签颜色 | `string`  | -        | -                                  |
| bordered | 是否显示边框   | `boolean` | `true`   | `true` `false`                     |
| closable | 是否可关闭     | `boolean` | `false`  | `true` `false`                     |
| variant  | 标签风格       | `string`  | `dark`   | `dark` `light` `plain`             |
| disabled | 禁用标签       | `boolean` | `false`  | `true` `false`                     |
| shape    | 标签形状       | `string`  | `square` | `square` `round`                   |
| maxWidth | 标签最大宽度   | `string`  | --       | --                                 |

### Tag Events

| 事件  | 描述               | 参数            |
| ----- | ------------------ | --------------- |
| close | 点击关闭图标时触发 | (e: MouseEvent) |

### Tag Slots

| 插槽       | 描述     | 参数 |
| ---------- | -------- | ---- |
| default    | 默认插槽 | -    |
| icon       | 图标     | -    |
| close-icon | 关闭图标 | -    |
