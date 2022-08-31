### Dropdown Attributes

| 属性                | 描述                                              | 类型      | 默认值   | 可选值                                          |
| ------------------- | ------------------------------------------------- | --------- | -------- | ----------------------------------------------- |
| visible             | 下拉面板是否可见                                  | `boolean` | `true`   | `true` `false`                                  |
| trigger             | 触发方式,类型 `string` 或 trigger 数组            | `strine`  | `click`  | `click` `hover` `focus` `contextMenu`           |
| disabled            | 是否禁用触发                                      | `boolean` | `false`  | `true` `false`                                  |
| placement           | 下拉面板位置                                      | `string`  | `bottom` | `top` `bottom` `right` `left` `*-start` `*-end` |
| autoFitPosition     | 是否自动调整下拉面板位置                          | `boolean` | `true`   | `true` `false`                                  |
| autoFitWidth        | 是否将下拉面板宽度设置为触发器宽度                | `boolean` | `false`  | `true` `false`                                  |
| autoFitMinWidth     | 是否将下拉面板最小宽度设置为触发器宽度            | `boolean` | `true`   | `true` `false`                                  |
| updateAtScroll      | 是否在容器滚动时更新下拉面板的位置                | `boolean` | `false`  | `true` `false`                                  |
| autoFixPosition     | 是否在触发器或下拉面板尺寸变化时更新下拉面板位置  | `boolean` | `true`   | `true` `false`                                  |
| clickToClose        | 是否在点击触发器时关闭面板                        | `boolean` | `true`   | `true` `false`                                  |
| blurToClose         | 是否在触发器失去焦点时关闭面板                    | `boolean` | `true`   | `true` `false`                                  |
| clickOutsideToClose | 是否点击外部关闭下拉面板                          | `boolean` | `true`   | `true` `false`                                  |
| contentOffset       | 下拉面板距离触发器的偏移距离                      | `string`  | `2px`    | -                                               |
| mouseEnterDelay     | mouseEnter 事件延迟触发的时间, trigger hover 有效 | `number`  | `150`    | -                                               |
| mouseLeaveDelay     | mouseLeave 事件延迟触发的时间, trigger hover 有效 | `number`  | `150`    | -                                               |
| focusDelay          | focus 事件延迟触发的时间, trigger focus 有效      | `number`  | `150`    | -                                               |

### Dropdown Slots

| 插槽    | 描述     | 参数 |
| ------- | -------- | ---- |
| content | 下拉内容 | --   |

### Dropdown Events

| 插槽 | 描述               | 参数 |
| ---- | ------------------ | ---- |
| show | 隐藏下拉内容后触发 | --   |
| open | 显示下拉内容后触发 | --   |

### Dropdown Menu Item Slots

| 插槽    | 描述 | 参数 |
| ------- | ---- | ---- |
| prefix  | 前缀 | --   |
| default | 默认 | --   |
| suffix  | 后缀 | --   |

### Dropdown Sub Menu Attributes

| 属性          | 描述                                   | 类型      | 默认值   | 可选值                                          |
| ------------- | -------------------------------------- | --------- | -------- | ----------------------------------------------- |
| trigger       | 触发方式,类型 `string` 或 trigger 数组 | `strine`  | `click`  | `click` `hover` `focus` `contextMenu`           |
| disabled      | 是否禁用触发                           | `boolean` | `false`  | `true` `false`                                  |
| placement     | 下拉面板位置                           | `string`  | `bottom` | `top` `bottom` `right` `left` `*-start` `*-end` |
| contentOffset | 下拉面板距离触发器的偏移距离，默认 2   | `string`    | 2px      | -                                               |

### Dropdown Sub Menu Slots

| 插槽    | 描述         | 参数 |
| ------- | ------------ | ---- |
| prefix  | 前缀         | --   |
| default | 默认         | --   |
| suffix  | 后缀         | --   |
| content | 下拉面板内容 | --   |
