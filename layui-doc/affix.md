### Affix Attributes

| 属性     | 描述         | 类型          | 默认值          | 可选值         |
| -------- | ------------ | ------------- | --------------- | -------------- |
| position | 定位属性     | `string`      | `top`           | `top` `bottom` |
| offset   | 偏移量       | `number`      | 0               | -              |
| target   | 指定参考容器 | `HTMLElement` | `document.body` | -              |

### Affix Events

| 属性   | 描述                                                                                                     | 参数                                                                              |
| ------ | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| scroll | 初始化完成与滚动时触发的回调，回调会返回一个 object`{targetScroll:string,affixed:boolean,offset:number}` | `targetScroll` 容器滚动距离`affixed` 是否处于 fixed 状态`offset` 与原本位置的距离 |
