### Tree Attributes

| 属性                             | 描述                                     | 类型      | 默认值  | 可选值         |
| -------------------------------- | ---------------------------------------- | --------- | ------- | -------------- |
| data                             | 树型组件数据,类型 TreeData \| TreeData[] | -         | null    | -              |
| showCheckbox                     | 是否显示复选框                           | `boolean` | `false` | `true` `false` |
| onlyIconControl                  | 是否仅允许节点左侧图标控制展开收缩       | `boolean` | `false` | `true` `false` |
| showLine                         | 是否开启连接线                           | `boolean` | `true`  | `true` `false` |
| checkedKeys(v-model:checkedKeys) | 开启 showCheckbox 后, 选中的节点         | Array     | []      | -              |
| collapse-transition              | 是否开启展示收起动画                     | `boolean` | `false` | `true` `false` |

### Tree Events

| Name       | Description     | Accepted Params |
| ---------- | --------------- | --------------- |
| node-click | 节点 click 事件 | --              |
