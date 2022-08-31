### Checkbox Attributes

| 属性             | 描述          | 类型      | 默认值  | 可选值              |
| ---------------- | ------------- | --------- | ------- | ------------------- |
| name             | 原始属性 name | `string`  | -       | --                  |
| skin             | 主题          | `string`  | -       | -                   |
| label            | 当前显示的值  | `string`  | -       | -                   |
| v-model          | 是否选中      | `boolean` | `false` | `true` `false`      |
| is-indeterminate | 半选          | `boolean` | `false` | `true` `false`      |
| size             | 尺寸          | `string`  | `md`    | `lg` `md` `sm` `xs` |

### Checkbox Events

| 事件   | 描述     | 可选值               |
| ------ | -------- | -------------------- |
| change | 切换事件 | isChecked : 当前状态 |

### Checkbox Group Attributes

| 属性     | 描述         | 类型      | 默认值  | 可选值         |
| -------- | ------------ | --------- | ------- | -------------- |
| disabled | 是否整体禁用 | `boolean` | `false` | `true` `false` |
