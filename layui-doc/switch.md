### Switch Attributes

| 属性           | 描述           | 类型                        | 默认值                   | 可选值              | 版本    |
| -------------- | -------------- | --------------------------- | ------------------------ | ------------------- | ------- |
| name           | 原生 name 属性 | `string`                    | --                       | --                  | --      |
| v-model        | 是否启用       | `boolean` `string` `number` | --                       | --                  | --      |
| disabled       | 禁用           | `boolean`                   | `false`                  | `true` `false`      | --      |
| onswitch-text  | 启用描述       | `string`                    | `启动`                   | --                  | --      |
| unswitch-text  | 禁用描述       | `string`                    | `禁用`                   | --                  | --      |
| onswitch-value | 启用值         | `boolean` `string` `number` | `true`                   | --                  | --      |
| unswitch-value | 禁用值         | `boolean` `string` `number` | `false`                  | --                  | --      |
| size           | 尺寸           | `string`                    | `md`                     | `lg` `md` `sm` `xs` | --      |
| loading        | 加载状态       | `boolean`                   | `false`                  | `true` `false`      | `1.4.0` |
| loading-icon   | 加载图标       | `string`                    | `layui-icon-loading-one` | --                  | `1.4.0` |

### Switch Events

| 属性   | 描述     | 参数         |
| ------ | -------- | ------------ |
| change | 切换事件 | val : 当前值 |

### Switch Slots

| 属性          | 描述     | 参数 |
| ------------- | -------- | ---- |
| onswitch-icon | 启用图标 | --   |
| unswitch-icon | 禁用图标 | --   |
