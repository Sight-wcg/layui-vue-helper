### Page Attributes

| 属性        | 描述                 | 类型                           | 默认值  | 可选值         |
| ----------- | -------------------- | ------------------------------ | ------- | -------------- |
| v-model     | 当前页               | `number`                       | --      | --             |
| limit       | 每页数量             | `number`                       | --      | --             |
| total       | 总条数               | `number`                       | --      | --             |
| showCount   | 显示总数             | `boolean`                      | `false` | `true` `false` |
| showPage    | 显示每页             | `boolean`                      | `false` | `true` `false` |
| showLimit   | 显示每页数量         | `boolean`                      | `false` | `true` `false` |
| showRefresh | 显示刷新按钮         | `boolean`                      | `false` | `true` `false` |
| showSkip    | 显示跳转             | `boolean`                      | `false` | `true` `false` |
| pages       | 显示切页按钮数量     | `number`                       | `10`    | -              |
| limits      | 切换每页数量的选择项 | `number[]` `[10,20,30,40,50] ` | -       | -              |
| theme       | 主题色               | `string`                       | `green` | -              |

### Page Events

| 事件   | 描述                 | 参数                                   |
| ------ | -------------------- | -------------------------------------- |
| jump   | 切换回调,已废弃      | { current: 当前页面 }                  |
| limit  | 每页数量变化，已废弃 | 变化后的值                             |
| change | 分页事件             | { current: 当前页码, limit: 每页数量 } |

### Page Slots

| 插槽 | 描述   | 默认值 |
| ---- | ------ | ------ |
| prev | 上一页 | 上一页 |
| next | 下一页 | 下一页 |
