### Select Attributes

| 属性        | 描述               | 类型                      | 默认值   | 可选值         |
| ----------- | ------------------ | ------------------------- | -------- | -------------- |
| v-model     | 选中值             | `string` `number` `Array` | -        | -              |
| name        | 原生 name 属性     | `string`                  | -        | -              |
| placeholder | 默认空提示语       | `string`                  | `请选择` | -              |
| disabled    | 是否禁用           | `boolean`                 | `false`  | `true` `false` |
| showEmpty   | 是否增加空提示选项 | `boolean`                 | `true`   | `true` `false` |
| multiple    | 是否为多选         | `boolean`                 | `false`  | `true` `false` |
| create      | 是否允许创建       | `boolean`                 | `false`  | `true` `false` |

### Select Events

| 属性   | 描述                         | 接收值                  |
| ------ | ---------------------------- | ----------------------- |
| change | 切换事件                     | value                   |
| search | 关键词变化事件               | 用户输入的关键词 string |
| create | 允许创建情况下的创建回调事件 | 用户输入的关键词 string |

### Select Option Attributes

| 属性     | 描述                                                | 类型              | 默认值  | 可选值         |
| -------- | --------------------------------------------------- | ----------------- | ------- | -------------- |
| label    | 标签值(`必填`)                                      | `string`          | -       | -              |
| value    | 值                                                  | `string` `number` | -       | -              |
| keyword  | 用于匹配关键词的数据，传入文本+拼音可以支持拼音搜索 | `string`          | -       | -              |
| disabled | 是否禁用                                            | `boolean`         | `false` | `true` `false` |

### Select Option Slots

| 属性    | 描述          | 接收值 |
| ------- | ------------- | ------ |
| default | 默认(`label`) | -      |
