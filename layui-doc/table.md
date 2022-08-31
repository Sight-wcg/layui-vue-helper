### Table Attributes

| 属性                 | 描述                                                  | 类型                | 默认值     | 可选值             |
| -------------------- | ----------------------------------------------------- | ------------------- | ---------- | ------------------ |
| columns              | 列配置 - [更多](#tableColumn)                         | --                  | --         | --                 |
| dataSource           | 数据源                                                | --                  | --         | --                 |
| checkbox             | 开启复选框                                            | `boolean`           | `false`    | `true` `false`     |
| id                   | 主键                                                  | `string`            | --         | --                 |
| v-model:selectedKeys | 选中项 (多选)                                         | --                  | --         | --                 |
| v-model:selectedKey  | 选中项 (单选)                                         | --                  | --         | --                 |
| default-toolbar      | 工具栏                                                | `boolean`           | `false`    | `true` `false`     |
| size                 | 尺寸                                                  | `string`            | `md`       | `lg` `md` `sm`     |
| children-column-name | 树节点字段                                            | `string`            | `children` | --                 |
| indent-size          | 树表行级缩进                                          | `number`            | `30`       | --                 |
| height               | 表格高度                                              | `number`            | --         | --                 |
| maxHeight            | 表格最大高度                                          | `number`            | --         | --                 |
| even                 | 斑马条纹                                              | `boolean`           | `false`    | `true` `false`     |
| cellStyle            | 列样式 function(row, column, rowIndex, columnIndex)   | `string` `function` | --         | --                 |
| rowStyle             | 行样式 function(row, rowIndex)                        | `string` `function` | --         | --                 |
| cellClassName        | 列类名称 function(row, column, rowIndex, columnIndex) | `string` `function` | --         | --                 |
| rowClassName         | 行类名称 function(row, rowIndex)                      | `string` `function` | --         | --                 |
| skin                 | 风格                                                  | `string`            | --         | `line` `row` `nob` |
| expand-index         | 展开所在列                                            | `number`            | --         | --                 |
| default-expand-all   | 默认展开所有列                                        | `boolean`           | `false`    | `true` `false`     |
| expand-keys          | 展开的列                                              | `array`             | `[]`       | --                 |
| span-method          | 合并算法                                              | `function`          | --         | --                 |
| getCheckboxProps     | 多选行属性                                            | `function`          | --         | --                 |
| getRadioProps        | 单选行属性                                            | `function`          | --         | --                 |

### Table Events

| 属性            | 描述     | 参数                                   |
| --------------- | -------- | -------------------------------------- |
| row             | 行单击   | data : 当前行                          |
| row-double      | 行双击   | data : 当前行                          |
| row-contextmenu | 行右击   | data : 当前行                          |
| change          | 分页事件 | { current: 当前页码, limit: 每页数量 } |

### Table Slots

| 插槽    | 描述         | 参数 |
| ------- | ------------ | ---- |
| toolbar | 自定义工具栏 | --   |
| footer  | 底部扩展     | --   |

### Table Column Slots

| 插槽            | 描述                           | 类型      | 默认值  | 可选值                      |
| --------------- | ------------------------------ | --------- | ------- | --------------------------- |
| title           | 列标题                         | --        | --      | --                          |
| key             | 数据字段                       | --        | --      | --                          |
| customSlot      | 自定义插槽                     | --        | --      | --                          |
| width           | 宽度                           | --        | --      | --                          |
| minWidth        | 最小宽度                       | --        | `100px` | --                          |
| sort            | 排序                           | --        | --      | --                          |
| titleSlot       | 标题插槽                       | --        | --      | --                          |
| align           | 对齐方式                       | `string`  | `left`  | `left` `right` `center`     |
| ellipsisTooltip | 当内容过长被隐藏时显示 tooltip | `boolean` | `false` | `true` `false`              |
| totalRow        | 开启列值统计                   | --        | --      | --                          |
| type            | 列类型                         | string    | --      | `radio` `checkbox` `number` |
| hide            | 隐藏列                         | --        | --      | --                          |
| fixed           | 列固定                         | `string`  | --      | `left` `right`              |
| type            | 列类型                         | `string`  | --      | `number` `checkbox` `radio` |
| children        | 表头分组                       | `string`  | --      | `number` `checkbox` `radio` |
