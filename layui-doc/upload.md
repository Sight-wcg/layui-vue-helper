### Upload Attributes

| 属性            | 描述                                                    | 类型      | 默认值                       | 可选值         |
| --------------- | ------------------------------------------------------- | --------- | ---------------------------- | -------------- |
| url             | 服务端上传接口的地址                                    | `string`  | -                            | --             |
| data            | 请求上传接口的额外参数                                  | `object`  | -                            | --             |
| headers         | 接口的请求头                                            | `object`  | -                            | --             |
| acceptMime      | 文件选择框时的可选文件类型                              | `string`  | `MIME_type`                  | `MIME_type`    |
| field           | 设定文件域的字段名                                      | `string`  | `file`                       | --             |
| size            | 设置文件最大可允许上传的大小，单位 KB。不支持 ie8/9     | `number`  | `0`                          | --             |
| multiple        | 是否允许多文件上传。设置 true 即可开启。不支持 ie8/9    | `boolean` | `false`                      | `true` `false` |
| number          | 设置同时可上传的文件数量，一般配合 multiple 参数出现。  | `number`  | `0`                          | --             |
| drag            | 是否接受拖拽的文件上传，设置 false 可禁用。不支持 ie8/9 | `boolean` | `true`                       | `true` `false` |
| disabled        | 设置文件禁用                                            | `boolean` | `false`                      | `true` `false` |
| disabledPreview | 设置文件预览插槽区域为禁用状态                          | `boolean` | `false`                      | `true` `false` |
| cut             | 是否开启选择图片后检测,设置 true 可开启                 | `boolean` | `false`                      | `true` `false` |
| cutOptions      | 开启剪裁的模态弹窗与剪裁框的配置                        | `object`  | { layerOption,copperOption } | --             |

### Upload Slots

| 名称    | 描述           | 参数 |
| ------- | -------------- | ---- |
| preview | 自定义预览效果 | --   |

### Upload Events

| 名称     | 描述                       | 参数 |
| -------- | -------------------------- | ---- |
| choose   | 打开系统选择文件窗体的回调 | --   |
| before   | 上传事务开启前的回调       | --   |
| done     | 上传事务结束的回调         | --   |
| error    | 上传事务中出现错误的回调   | --   |
| cutdown  | 剪裁完成                   | --   |
| cutclose | 剪裁取消                   | --   |
