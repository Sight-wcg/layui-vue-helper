### Backtop Attributes

| 属性         | 描述                                                | 类型              | 默认值           | 可选值                       |
| ------------ | --------------------------------------------------- | ----------------- | ---------------- | ---------------------------- |
| target       | 可选，触发滚动事件的对象                            | `string` `Window` | `window`         | `CSS 选择器` `window`        |
| showHeight   | 可选，滚动高度达到该值后<br>显示回到顶部按钮        | `number`          | `200`            | —                            |
| disabled     | 可选，禁用点击返回顶部                              | `boolean`         | `false`          | `true` `false`               |
| position     | 可选，定位方式，特定容器内部<br>需设置为 `absolute` | `string`          | `fixed`          | `absolute` `fixed`           |
| right        | 可选，按钮距离页面右边距                            | `number`          | `30`             | —                            |
| size         | 可选，按钮大小                                      | `string`          | ——               | `medium` `small`             |
| bottom       | 可选，按钮距离页面底部位置                          | `number`          | `40`             | `40`                         |
| bgcolor      | 可选，背景颜色                                      | `string`          | `#9F9F9F`        | —                            |
| opacity      | 可选，不透明度                                      | `number`          | `0.95`           | `0-1`                        |
| color        | 可选，前景颜色                                      | `string`          | `#FFFFFF`        | —                            |
| borderRadius | 可选，添加圆角, e.g. `2` `2px` `50%`                | `number` `string` | `2`              | -                            |
| circle       | 可选，使用圆形按钮                                  | `boolean`         | `false`          | `true` `false`               |
| icon         | 可选，图标类型                                      | `string`          | `layui-icon-top` | `lay-icon`组件支持的所有类型 |
| iconSize     | 可选，图标大小                                      | `number`          | `30`             | `30`                         |
| iconColor    | 可选，图标颜色                                      | `string`          | `#FFFFFF`        | —                            |

### Backtop Events

| 事件  | 描述                       | 参数  |
| ----- | -------------------------- | ----- |
| click | 点击回到顶部按钮的回调函数 | event |

### Backtop Slots

| 插槽    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |
