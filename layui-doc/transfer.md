### Transfer Attributes

| 属性                 | 描述         | 类型      | 默认值  | 可选值         |
| -------------------- | ------------ | --------- | ------- | -------------- |
| modalValue (v-model) | 目标值       | -         | -       | -              |
| dataSource           | 数据来源     | -         | -       | -              |
| title                | 标题         | `string`  | -       | -              |
| id                   | 主键         | `string`  | -       | -              |
| showSearch           | 开启搜索     | `boolean` | `false` | `true` `false` |
| width                | 左右盒子宽度 | `string`  | `200px` | -              |
| height               | 左右盒子高度 | `string`  | `360px` | -              |

### Transfer Events

| Name   | Description  | Accepted Values |
| ------ | ------------ | --------------- |
| change | 数据穿梭回调 | targetKeys      |

### Transfer Slots

| Name        | Description      | Accepted Values |
| ----------- | ---------------- | --------------- |
| item        | 列表项           | { data }        |
| leftFooter  | 左侧盒子底部内容 | --              |
| rightFooter | 右侧盒子底部内容 | --              |
