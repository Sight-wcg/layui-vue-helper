### Input Attributes

| 属性                 | 描述                  | 类型              | 默认值  | 可选值              |
| -------------------- | --------------------- | ----------------- | ------- | ------------------- |
| name                 | 原始属性 name         | `string`          | --      | --                  |
| placeholder          | 提示信息              | `string`          | --      | --                  |
| disabled             | 禁用                  | `boolean`         | `false` | `true` `false`      |
| readonly             | 原生属性 readonly     | `boolean`         | `false` | `true` `false`      |
| v-model / modelValue | 值                    | `string` `number` | --      | --                  |
| autofocus            | 原生属性 autofocus    | `boolean`         | `false` | `true` `false`      |
| autocomplete         | 原生属性 autocomplete | `boolean`         | `false` | `true` `false`      |
| allow-clear          | 允许清空 allow-clear  | `boolean`         | `false` | `true` `false`      |
| prefix-icon          | 前置图标              | --                | --      | 内置 icon 集        |
| suffix-icon          | 后置图标              | --                | --      | 内置 icon 集        |
| password             | 开启密码显示隐藏      | `boolean`         | `false` | `true` `false`      |
| size                 | 尺寸                  | `string`          | `md`    | `lg` `md` `sm` `xs` |
| maxlength            | 限制输入长度          | `number`          | --      | --                  |

### Input Events

| 事件   | 描述             | 参数                        |
| ------ | ---------------- | --------------------------- |
| input  | 原生 input 事件  | (value : `string` `number`) |
| change | 原生 change 事件 | (value : `string` `number`) |
| foucs  | 原生 foucs 事件  | event : Event               |
| blur   | 原生 blur 事件   | event : Event               |
| clear  | 清空 事件        | --                          |

### Input Slots

| 事件    | 描述           | 参数 |
| ------- | -------------- | ---- |
| prefix  | 输入框前置内容 | --   |
| suffix  | 输入框后置内容 | --   |
| prepend | 输入框前置内容 | --   |
| append  | 输入框后置内容 | --   |
