### Step Attributes

| 属性          | 描述           | 类型       | 默认值            | 可选值                               |
| ------------- | -------------- | ---------- | ----------------- | ------------------------------------ |
| active        | 第几步         | `number`   | 0                 | -                                    |
| center        | 居中布局       | `boolean`  | `false`           | `true` `false`                       |
| direction     | 垂直/平行布局  | `string`   | `horizontal`      | `horizontal` `vertical`              |
| space         | 宽度           | `string`   | `auto`            | -                                    |
| currentStatus | 当前状态显示   | `string`   | `success`         | `primary` `success` `fail` `warning` |
| composition   | 排版           | `string`   | `default`         | `default` `row`                      |
| simple        | 简洁版         | `boolean`  | `false`           | `true` `false`                       |
| onChange      | 点击切换时监听 | `function` | function(index){} | -                                    |

### Step Item Attributes

| 属性    | 描述     | 类型   | 默认值    | 可选值                               |
| ------- | -------- | ------ | --------- | ------------------------------------ |
| title   | 标题     | string | -         | -                                    |
| content | 内容描述 | string | -         | -                                    |
| icon    | 图标     | string | -         | -                                    |
| status  | 状态     | string | `primary` | `primary` `success` `fail` `warning` |

### Step Item Slots

| 属性    | 描述           |
| ------- | -------------- |
| pace    | 圆圈内容自定义 |
| default | 内容区域自定义 |
