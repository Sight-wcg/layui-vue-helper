### Radio Attributes

| 属性    | 描述          | 类型                | 默认值 | 可选值 |
| ------- | ------------- | ------------------- | ------ | ------ |
| name    | 原始属性 name | `string`            | --     | --     |
| label   | 当前显示的值  | `string`            | --     | --     |
| v-model | 选中值        | -                   | -      | -      |
| size    | 尺寸          | `lg` `md` `sm` `xs` | `md`   | -      |

### Radio Events

| 事件   | 描述     | 参数             |
| ------ | -------- | ---------------- |
| change | 切换事件 | current : 当前值 |

### Radio Group Attributes

| 属性     | 描述         | 类型      | 默认值  | 可选值         |
| -------- | ------------ | --------- | ------- | -------------- |
| v-model  | 选中值       | --        | -       | -              |
| disabled | 是否整体禁用 | `boolean` | `false` | `true` `false` |

### Radio Group Events

| 事件   | 描述     | 参数             |
| ------ | -------- | ---------------- |
| change | 切换事件 | current : 当前值 |
