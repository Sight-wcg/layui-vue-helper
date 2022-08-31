### Carousel Attributes

| 属性         | 描述               | 类型      | 默认值    | 可选值                    |
| ------------ | ------------------ | --------- | --------- | ------------------------- |
| v-model      | 当前激活项         | `number`  | --        | --                        |
| anim         | 切换方向           | `string`  | `default` | `default` `updown`        |
| indicator    | 控制器位置         | `string`  | `inside`  | `inside` `outside` `none` |
| arrow        | 切换按钮状态       | `string`  | `hover`   | `hover` `always` `none`   |
| autoplay     | 自动播放           | `boolean` | `true`    | `true` `false`            |
| interval     | 轮播间隔           | `number`  | `3000`    | --                        |
| pauseOnHover | 鼠标悬停时暂停播放 | `boolean` | `true`    | `true` `false`            |

### Carousel Events

| 事件   | 描述     | 参数 |
| ------ | -------- | ---- |
| change | 切换回调 | id   |
