### Tab Attributes

| 属性                | 描述                                               | 类型                                      | 默认值   | 可选值                        |
| ------------------- | -------------------------------------------------- | ----------------------------------------- | -------- | ----------------------------- |
| v-model             | 当前激活                                           | `string`                                  | -        | -                             |
| type                | 主题样式                                           | `string`                                  | -        | -                             |
| tabPosition         | 位置                                               | `string`                                  | `bottom` | `top` `bottom` `left` `right` |
| allow-close         | 允许关闭                                           | `boolean`                                 | `false`  | `true` `false`                |
| before-close        | `Function`关闭之前的回调钩子函数                   | 参数(`id`), `return false` 表示不进行关闭 | -        | -                             |
| before-leave        | `Function`切换标签之前的回调钩子函数               | 参数(`id`), `return false` 表示不进行切换 | -        | -                             |
| activeBarTransition | 是否开启 activeBar 动画,仅 brief 有效,默认 `false` | `boolean`                                 | `false`  | `true` `false`                |

### Tab Events

| 事件   | 描述     | 参数 |
| ------ | -------- | ---- |
| change | 选中切换 | id   |
| close  | 关闭事件 | id   |

### Tab Item Attributes

| 属性     | 描述                  | 类型             | 默认值  | 可选值         |
| -------- | --------------------- | ---------------- | ------- | -------------- |
| id       | 唯一标识              | `string`         | -       | -              |
| title    | 头部标题,支持渲染函数 | `string` `vnode` | -       | -              |
| icon     | 前置图标              | `string` `vnode` | -       | -              |
| closable | 允许关闭              | `boolean`        | `false` | `true` `false` |

### Tab Item Slots

| 属性  | 描述     | 参数 |
| ----- | -------- | ---- |
| title | 头部标题 | --   |
