### Form Attributes

| 属性                    | 描述                                                                                                                                                                                                                                                                                                                                       | 类型      | 可选值         | 默认值       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | -------------- | ------------ |
| v-model                 | 表单绑定值                                                                                                                                                                                                                                                                                                                                 | `object`  | -              | {}           |
| required                | 是否必填                                                                                                                                                                                                                                                                                                                                   | `boolean` | `true` `false` | `false`      |
| rules                   | 表单校验规则; <br>可查看[async-validator](https://github.com/yiminghe/async-validator)                                                                                                                                                                                                                                                     | `object`  | -              | -            |
| initValidate            | 是否一开始就校验表单                                                                                                                                                                                                                                                                                                                       | `boolean` | `true` `false` | `false`      |
| useCN                   | 是否使用中文错误提示                                                                                                                                                                                                                                                                                                                       | `boolean` | `true` `false` | `false`      |
| requiredIcons           | 必填前缀图标`class`                                                                                                                                                                                                                                                                                                                        | `string`  | -              | `*`          |
| required-erroer-message | 必填错误提示信息                                                                                                                                                                                                                                                                                                                           | `string`  | -              | `%s不能为空` |
| validate-message        | 自定义校验错误提示信息; <br>由于内置了中文错误提示，可按需求增量增加<br>可查看 [async-validator 内置错误提示](https://github.com/yiminghe/async-validator/blob/master/src/messages.ts)<br>也可参考 [layui-vue 内置中文错误提示](https://gitee.com/layui/layui-vue/blob/next/package/component/src/component/formItem/cnValidateMessage.ts) | `string`  | -              | `%s不能为空` |

### Form Events

| 属性   | 描述                   | 回调参数                                                                                                                                                              |
| ------ | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| submit | 提交事件`(不推荐使用)` | (`isValidate`, `model`, `errors`)<br><br> `isValidate`: (`boolean`)是否校验通过<br><br> `model`: (`object`)表单绑定的值<br><br> `errors`: (`Array`)校验结果的错误信息 |

### Form Methods

| 属性          | 描述                                                                                                                                                      | 入参                                                                                                                                                                                                                                                                                                                                 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| validate      | 表单校验; <br>如果没有`callback`回调，会返回`Promise`, <br> `Promise`参数为{`isValidate`, `model`, `errors`}<br> 参数具体描述请看上面表单`submit`提交事件 | (`fields` `[可选]`, `callback` `[可选]`)<br><br> `fields`: (`string` / `string[]` / `function`)<br>单独校验的字段，<br>该字段如果为`function`, <br>则认为`callback`入参，校验全部字段;<br><br> `callback`: (`function`)校验之后的回调，<br>回调参数为(`isValidate`, `model`, `errors`)；<br>参数具体描述请看上面表单`submit`提交事件 |
| clearValidate | 清除表单校验                                                                                                                                              | (`fields`[可选])<br><br> `fields`: (`string` / `string[]`)<br>需要进行清除校验的表单字段, 如果该字段为空则清除全部校验                                                                                                                                                                                                               |
| reset         | 重置表单所有值                                                                                                                                            | -                                                                                                                                                                                                                                                                                                                                    |

### Form Item Attributes

| 属性                 | 描述                                                                                   | 类型              | 可选值               | 默认值  |
| -------------------- | -------------------------------------------------------------------------------------- | ----------------- | -------------------- | ------- |
| prop                 | 在表单绑定值(`model`)中字段`key`                                                       | `string`          | -                    | -       |
| label                | 子项前边描述值，**尽量填写**，中文校验错误需要用到                                     | `string`          | -                    | -       |
| label-position       | 子项前边描述值的位置                                                                   | `string`          | `left` `top` `right` | `right` |
| required             | 是否必填                                                                               | `boolean`         | `true` `false`       | `false` |
| rules                | 表单校验规则; <br>可查看[async-validator](https://github.com/yiminghe/async-validator) | `object`          | -                    | -       |
| error-message        | 表单校验失败固定提示语                                                                 | `string`          | `block` `inline`     | `block` |
| mode                 | 表单项显示的模式，`块元素` / `行元素`                                                  | `string`          | `block` `inline`     | `block` |
| label-width          | 子项前边描述值的宽度                                                                   | `string` `number` | -                    | `95`    |
| requiredErrorMessage | 必填错误提示信息                                                                       | `string`          | -                    | -       |

### Form Item Methods

| 属性          | 描述         | 入参                                                                                                                                                                                                     |
| ------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| validate      | 表单校验;    | (`callback` `[可选]`)<br><br> `callback`: (`function`)校验之后的回调，<br>回调参数为(`errors`, `fields`)；<br><br> `errors`: (`Array`)校验结果的错误信息；<br><br> `fields`: (`Array`)当前校验的字段信息 |
| clearValidate | 清除表单校验 | -                                                                                                                                                                                                        |

### Form Item Slots

| 属性     | 描述                                                                 | 可使用参数                               |
| -------- | -------------------------------------------------------------------- | ---------------------------------------- |
| default  | 默认插槽                                                             | 传递进来的`props`和表单绑定的值(`model`) |
| label    | 子项前边描述插槽<br>如果使用此插槽，`props`**尽量**也传递`label`参数 | 传递进来的`props`和表单绑定的值(`model`) |
| required | 必填前缀插槽                                                         | `*` / `表单props` 中的 `requiredIcons`   |
