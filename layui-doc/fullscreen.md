### Fullscreen Attributes

| 属性      | 描述                                      | 类型          | 默认值 | 可选值             |
| --------- | ----------------------------------------- | ------------- | ------ | ------------------ |
| target    | 可选，要全屏显示的元素                    | `HTMLElement` | `html` | -                  |
| immersive | 可选，全屏模式，`false`时浏览器窗口内全屏 | `boolean`     | `true` | `true` `false`     |
| position  | 可选，浏览器窗口内全屏定位模式            | `string`      | -      | `absolute` `fixed` |
| zIndex    | 可选，全屏层级                            | `string`      | -      | -                  |

### Fullscreen Events

| 事件             | 描述             | 参数                  |
| ---------------- | ---------------- | --------------------- |
| fullscreenchange | 全屏更改事件回调 | isFullscreen 是否全屏 |

### Fullscreen Slots

| 插槽    | 描述     | 参数 |
| ------- | -------- | ---- |
| default | 默认插槽 | -    |

### Fullscreen Slot Attributes

| 属性         | 描述          | 类型     | 参数                          |
| ------------ | ------------- | -------- | ----------------------------- |
| enter        | 进入全屏      | Function | 可选,`HTMLElement`            |
| exit         | 退出全屏      | Function | 可选,`HTMLElement` `Document` |
| toggle       | 进入/退出全屏 | Function | -                             |
| isFullscreen | 是否全屏      | boolean  | -                             |
