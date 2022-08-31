### Line Attributes

| 属性            | 描述                                              | 类型     | 默认值       | 可选值                                                               |
| --------------- | ------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------- |
| direction       | 分割线的方向                                      | `string` | `horizontal` | `horizontal` `vertical`                                              |
| contentPosition | 分割线内容位置                                    | `string` | `center`     | `center` `left` `right`                                              |
| offset          | 分割线内容偏移量。e.g. `30px` `20%`               | `string` | -            | -                                                                    |
| theme           | 主题, 除内置颜色外，支持自定义颜色。 e.g. #EEEEEE | `string` | `gray`       | `red` `orange` `green` `cyan` `blue` `black` `gray`                  |
| borderWidth     | 分割线宽度，单位 px。 e.g. `2px`                  | `string` |              | -                                                                    |
| borderStyle     | 分割线样式                                        | `string` | `solid`      | `solid` `dashed` `dotted` `double` `groove` `ridge` `inset` `outset` |
| margin          | 分割线边距,默认 8px                               | `string` |              | -                                                                    |

### Line Slots

| 插槽    | 说明                                       |
| ------- | ------------------------------------------ |
| default | 默认插槽，仅支持 direction 为 `horizontal` |
