### Tag Input Attributes

| 属性                | 描述                 | 类型                              | 默认值  | 可选值              |
| ------------------- | -------------------- | --------------------------------- | ------- | ------------------- |
| modelValue          | 绑定值               | `string[]` `number[]` `TagData[]` | -       | -                   |
| size                | 输入框大小           | `string`                          | `md`    | `lg` `md` `sm` `xs` |
| inputValue          | 输入框的值           | `string`                          | -       | -                   |
| placeholder         | 占位符               | `string`                          | -       | -                   |
| readonly            | 是否可只读           | `boolean`                         | `false` | `true` `false`      |
| allowClear          | 允许清空             | `boolean`                         | `false` | `true` `false`      |
| disabled            | 是否禁用             | `boolean`                         | `false` | `true` `false`      |
| max                 | 最大输入标签数量     | `number`                          | -       | -                   |
| minCollapsedNum     | 最小折叠数量         | `number`                          | -       | -                   |
| collapseTagsTooltip | 是否悬浮显示折叠标签 | `boolean`                         | `false` | `true` `false`      |
| tagProps            | tag 属性             | `LayTagProps`                     | -       | -                   |

### Tag Input Events

| 名称             | 描述                | 参数                                             |
| ---------------- | ------------------- | ------------------------------------------------ |
| change           | 值改变时触发        | (value: (string &#124; number &#124; TagData)[]) |
| inputValueChange | 输入框值改变时触发  | (inputValue: string)                             |
| remove           | 删除标签时触发      | (value: string &#124; number, e: Event)          |
| clear            | 点击清除按钮时触发  | (e: Event)                                       |
| focus            | 获得焦点时触发      | (e: Event)                                       |
| blur             | 失去焦点时触发      | (e: Event)                                       |
| pressEnter       | 按下 Enter 键时触发 | (inputValue: string, e: Event)                   |

### Tag Input Methods

| 名称  | 描述     | 参数 |
| ----- | -------- | ---- |
| focus | 获取焦点 | -    |
| blur  | 失去焦点 | -    |

### Tag Input Slots

| 插槽   | 描述     | 参数 |
| ------ | -------- | ---- |
| prefix | 前置插槽 | -    |
| suffix | 后置插槽 | -    |
