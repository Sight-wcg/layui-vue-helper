### Ripple Attributes

| 属性         | 描述                               | 类型      | 默认值  | 可选值                        |
| ------------ | ---------------------------------- | --------- | ------- | ----------------------------- |
| type         | 波纹类型                           | `string`  | `inset` | `out` `inset`                 |
| color        | 波纹颜色                           | `string`  | --      | --                            |
| borderRadius | 圆角，仅 `out` 类型                | `string`  | -       | -                             |
| spreadWidth  | 扩散宽度，单位 px，仅 `out` 类型   | `string`  | -       | -                             |
| spreadSize   | 扩散大小，单位 px，仅 `inset` 类型 | `string   | `--     | -                             |
| trigger      | 触发方式                           | `string`  | `click` | `click` `always` `mouseenter` |
| center       | 是否在元素中心扩散                 | `boolean` | `false` | `true` `false`                |

### Ripple Slots

| 插槽    | 描述     | 参数 |
| ------- | -------- | ---- |
| default | 默认插槽 | -    |
