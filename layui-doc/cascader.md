### Cascader Attributes

| 属性          | 描述                                                                    | 类型      | 默认值  | 可选值              |
| ------------- | ----------------------------------------------------------------------- | --------- | ------- | ------------------- |
| placeholder   | 提示信息                                                                | `string`  | -       | -                   |
| v-model       | 值                                                                      | -         | -       | -                   |
| decollator    | 分割符号，默认为 `/`                                                    | `string`  | -       | -                   |
| options       | 选项参数 格式请见上面的 demo                                            | -         | -       | -                   |
| onlyLastLevel | 回显 displayValue 仅显示最后一级，默认为 `false`                        | `boolean` | `false` | `true` `false`      |
| replaceFields | 自定义数据 key 名,可配置项为`label`,`value`,`children`,用法详见上面案例 | -         | -       | -                   |
| allow-clear   | 默认 slot 提供清空功能，与 lay-input 保持一致                           | `boolean` | `true`  | -                   |
| size          | 尺寸参数                                                                | `string`  | `md`    | `lg` `md` `sm` `xs` |

### Cascader Events

| 方法名 | 描述 |可选值|
| ---- | ------------ | |
| change | 选中后数据改变的回调 | |
