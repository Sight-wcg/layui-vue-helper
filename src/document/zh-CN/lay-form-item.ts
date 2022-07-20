import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentMethod } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'prop', description: '在表单绑定值(`model`)中字段`key`', type: '`string`', default: '-', value: '-' },
  {
    name: 'label',
    description: '子项前边描述值，**尽量填写**，中文校验错误需要用到',
    type: '`string`',
    default: '-',
    value: '-',
  },
  {
    name: 'label-position',
    description: '子项前边描述值的位置',
    type: '`string`',
    default: '`left` `top` `right`',
    value: '`right`',
  },
  { name: 'required', description: '是否必填', type: '`boolean`', default: '`true` `false`', value: '`false`' },
  {
    name: 'rules',
    description: '表单校验规则; <br>可查看[async-validator](https://github.com/yiminghe/async-validator)',
    type: '`object`',
    default: '-',
    value: '-',
  },
  {
    name: 'error-message',
    description: '表单校验失败固定提示语',
    type: '`string`',
    default: '`block` `inline`',
    value: '`block`',
  },
  {
    name: 'mode',
    description: '表单项显示的模式，`块元素` / `行元素`',
    type: '`string`',
    default: '`block` `inline`',
    value: '`block`',
  },
  { name: 'label-width', description: '子项前边描述值的宽度', type: '`string` `number`', default: '-', value: '`95`' },
];

export const methods: DocumentMethod[] = [
  {
    name: 'validate',
    description: '表单校验;',
    parameter:
      '(`callback` `[可选]`)<br><br> `callback`: (`function`)校验之后的回调，<br>回调参数为(`errors`, `fields`)；<br><br> `errors`: (`Array`)校验结果的错误信息；<br><br> `fields`: (`Array`)当前校验的字段信息',
  },
  { name: 'clearValidate', description: '清除表单校验', parameter: '-' },
];

export const slots: DocumentSlot[] = [
  { name: 'default', description: '默认插槽' },
  { name: 'label', description: '子项前边描述插槽<br>如果使用此插槽，`props`**尽量**也传递`label`参数' },
  { name: 'required', description: '必填前缀插槽' },
];

export const docLink: string = 'form';

export const document: LayDocument = { attributes, methods, slots, docLink };

export default document;
