import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentMethod } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'v-model', description: '表单绑定值', type: '`object`', default: '-', value: '{}' },
  { name: 'required', description: '是否必填', type: '`boolean`', default: '`true` `false`', value: '`false`' },
  {
    name: 'rules',
    description: '表单校验规则; <br>可查看[async-validator](https://github.com/yiminghe/async-validator)',
    type: '`object`',
    default: '-',
    value: '-',
  },
  {
    name: 'initValidate',
    description: '是否一开始就校验表单',
    type: '`boolean`',
    default: '`true` `false`',
    value: '`false`',
  },
  {
    name: 'useCN',
    description: '是否使用中文错误提示',
    type: '`boolean`',
    default: '`true` `false`',
    value: '`false`',
  },
  { name: 'requiredIcons', description: '必填前缀图标`class`', type: '`string`', default: '-', value: '`*`' },
  {
    name: 'required-erroer-message',
    description: '必填错误提示信息',
    type: '`string`',
    default: '-',
    value: '`%s不能为空`',
  },
  {
    name: 'validate-message',
    description:
      '自定义校验错误提示信息; <br>由于内置了中文错误提示，可按需求增量增加<br>可查看 [async-validator 内置错误提示](https://github.com/yiminghe/async-validator/blob/master/src/messages.ts)<br>也可参考 [layui-vue 内置中文错误提示](https://gitee.com/layui/layui-vue/blob/next/package/component/src/component/formItem/cnValidateMessage.ts)',
    type: '`string`',
    default: '-',
    value: '`%s不能为空`',
  },
];

export const methods: DocumentMethod[] = [
  {
    name: 'validate',
    description:
      '表单校验; <br>如果没有`callback`回调，会返回`Promise`, <br> `Promise`参数为{`isValidate`, `model`, `errors`}<br> 参数具体描述请看上面表单`submit`提交事件',
    parameter:
      '(`fields` `[可选]`, `callback` `[可选]`)<br><br> `fields`: (`string` / `string[]` / `function`)<br>单独校验的字段，<br>该字段如果为`function`, <br>则认为`callback`入参，校验全部字段;<br><br> `callback`: (`function`)校验之后的回调，<br>回调参数为(`isValidate`, `model`, `errors`)；<br>参数具体描述请看上面表单`submit`提交事件',
  },
  {
    name: 'clearValidate',
    description: '清除表单校验',
    parameter:
      '(`fields`[可选])<br><br> `fields`: (`string` / `string[]`)<br>需要进行清除校验的表单字段, 如果该字段为空则清除全部校验',
  },
  { name: 'reset', description: '重置表单所有值', parameter: '-' },
];

export const events: DocumentEvent[] = [
  {
    name: 'submit',
    description: '提交事件`(不推荐使用)`',
    parameter:
      '(`isValidate`, `model`, `errors`)<br><br> `isValidate`: (`boolean`)是否校验通过<br><br> `model`: (`object`)表单绑定的值<br><br> `errors`: (`Array`)校验结果的错误信息',
  },
];

export const docLink: string = 'form';

export const document: LayDocument = { attributes, methods, events, docLink };

export default document;
