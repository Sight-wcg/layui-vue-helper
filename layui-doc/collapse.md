### Collapse Attributes

| 属性                | 说明                       | 类型             | 默认值  | 可选值         |
| ------------------- | -------------------------- | ---------------- | ------- | -------------- |
| openKeys            | 默认打开的折叠面板子项 key | `string` `array` | --      | -              |
| accordion           | 是否开启手风琴效果         | `boolean`        | `false` | `true` `false` |
| collapse-transition | 折叠动画                   | `boolean`        | `true`  | `true` `false` |

### Collapse Events

| 名称   | 说明                 | 参数                                                                                                                                                                                                                 |
| ------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| change | 折叠面板变化触发事件 | (`id`, `isShow`, activeValues)<br> <br> `id`: (`number` / `string`)对应当前操作面板的值 <br> <br> `isShow`: (`boolean`)`true` -> 展开, `false` -> 折叠 <br> <br> `activeValues`: (`Array`)当前状态为展开的面板值集合 |

### Collapse Item Attributes

| 名称     | 说明     | 类型      | 默认值 | 可选值         |
| -------- | -------- | --------- | ------ | -------------- |
| id       | 编号     | `string`  | —      | —              |
| title    | 标题     | `string`  | —      | —              |
| disabled | 是否禁用 | `boolean` | —      | `true` `false` |

### Collapse Item Slots

| 名称  | 说明              | 参数      |
| ----- | ----------------- | --------- |
| --    | 默认插槽 --> 内容 | `{props}` |
| title | 标题插槽          | `{props}` |
