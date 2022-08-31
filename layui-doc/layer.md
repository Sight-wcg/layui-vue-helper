### Layer Attributes

| 属性           | 描述                                                                                                     | 类型                                                        | 默认值          | 可选值                                     |
| -------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | --------------- | ------------------------------------------ |
| type           | 弹层类型, `0:dialog` `1:page` `2:iframe` `3:loading` `4:drawer` `5:photos` `6:notifiy`                   | `string`                                                    | `1`             | `0` `1` `2` `3` `4` `5`                    |
| title          | 标题                                                                                                     | `string` `boolean`                                          | `信息`          | --                                         |
| content        | 内容                                                                                                     | `string` `HtmlFragment` `vnode`                             | --              | --                                         |
| v-model        | 显示                                                                                                     | `boolean`                                                   | `false`         | `true` `false`                             |
| offset         | 位置 `[top,left]`                                                                                        | `string` `[string,string]`                                  | `['50%','50%']` | `auto` `t` `r` `b` `l` `lt` `lb` `rt` `rb` |
| area           | 尺寸,e.g. `auto` `200px` `[width,height]`                                                                | `string` `[string,strring]`                                 | `auto`          | --                                         |
| move           | 是否允许拖拽                                                                                             | `boolean`                                                   | `true`          | `true` `false`                             |
| maxmin         | 是否允许缩放                                                                                             | `boolean`                                                   | `false`         | `true` `false`                             |
| resize         | 是否允许拉伸                                                                                             | `boolean`                                                   | `false`         | `true` `false`                             |
| anim           | 入场动画,`0 平滑放大`, `1 从上掉落`, `2 从最底部往上滑入`,`3 从左滑入`, `4 从左翻滚`, `5 渐显`, `6 抖动` | `number`                                                    | `0`             | `0` `1` `2` `3` `4` `5` `6`                |
| isOutAnim      | 关闭动画                                                                                                 | `boolean`                                                   | `true`          | `true` `false`                             |
| btnAlign       | 按钮位置                                                                                                 | `string`                                                    | `r`             | `l` `c` `r`                                |
| closeBtn       | 关闭按钮                                                                                                 | `boolean` `string`                                          | `1`             | `false` `1` `2`                            |
| time           | 关闭时间                                                                                                 | `number`                                                    | `0`             | --                                         |
| shade          | 是否显示遮罩                                                                                             | `boolean`                                                   | `true`          | `true` `false`                             |
| shadeClose     | 点击遮罩是否关闭                                                                                         | `boolean`                                                   | `true`          | `true` `false`                             |
| shadeOpacity   | 遮罩透明度                                                                                               | `string`                                                    | `0.1`           | `0.1` - `1`                                |
| isHtmlFragment | 是否解析 HTML 片段                                                                                       | `boolean`                                                   | `false`         | `true` `false`                             |
| imgList        | 图片数据数组                                                                                             | `array[{src:图片链接,alt:图片名字可选',thumb:'缩略图可选'}] | -               | -                                          |
| startIndex     | 图片初始浏览索引                                                                                         | `number`                                                    | 0               | -                                          |
| full           | 最大化回调                                                                                               | `function`                                                  | -               | -                                          |
| min            | 最小化回调                                                                                               | `function`                                                  | -               | -                                          |
| restore        | 重置回调                                                                                                 | `function`                                                  | -               | -                                          |
| success        | 打开回调                                                                                                 | `function`                                                  | -               | -                                          |
| end            | 关闭回调                                                                                                 | `function`                                                  | -               | -                                          |

### Layer Slots

| 名称    | 描述     | 参数 |
| ------- | -------- | ---- |
| default | 默认插槽 | -    |
