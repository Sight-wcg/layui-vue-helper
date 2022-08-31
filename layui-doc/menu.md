### Menu Attributes

| 属性                | 描述             | 类型      | 默认值  | 可选值         |
| ------------------- | ---------------- | --------- | ------- | -------------- |
| v-model:selectedKey | 选中项           | -         | -       | --             |
| v-model:openKeys    | 打开项           | -         | -       | --             |
| theme               | 菜单主题         | `string`  | `dark`  | `dark` `light` |
| inverted            | 特殊的激活样式   | `boolean` | `false` | `true` `false` |
| level               | 是否开启菜单层级 | `boolean` | `true`  | `true` `false` |
| collapse            | 折叠状态         | `boolean` | `true`  | `true` `false` |
| collapse-transition | 折叠动画         | `boolean` | `true`  | `true` `false` |

### Menu Events

| 名称              | 描述         | 参数            |
| ----------------- | ------------ | --------------- |
| changeSelectedKey | 选中菜单回调 | value: string   |
| changeOpenKeys    | 展开目录回调 | value: string[] |

### Menu Item Slots

| 名称  | 描述     | 备注 |
| ----- | -------- | ---- |
| title | 菜单标题 | --   |

### Sub Menu Attributes

| 属性  | 描述     | 类型   | 默认值 | 可选值 |
| ----- | -------- | ------ | ------ | ------ |
| title | 菜单标题 | string | -      | --     |

### Sub Menu Slots

| 插槽       | 描述     | 备注 |
| ---------- | -------- | ---- |
| title      | 菜单标题 | --   |
| expandIcon | 扩展图标 | --   |
