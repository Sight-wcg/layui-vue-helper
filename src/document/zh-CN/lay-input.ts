import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'name', description: '原始属性 name', type: '-', default: '-', value: '--' },
  { name: 'placeholder', description: '提示信息', type: '-', default: '-', value: '--' },
  { name: 'disabled', description: '禁用', type: '-', default: '-', value: '`true` `false`' },
  { name: 'readonly', description: '原生属性 readonly', type: '-', default: '-', value: '`true` `false`' },
  { name: 'v-model / modelValue', description: '值', type: '-', default: '-', value: '--' },
  { name: 'autofocus', description: '原生属性 autofocus', type: '-', default: '-', value: '`true` `false`' },
  { name: 'autocomplete', description: '原生属性 autocomplete', type: '-', default: '-', value: '`true` `false`' },
  { name: 'allow-clear', description: '允许清空 allow-clear', type: '-', default: '-', value: '`true` `false`' },
  { name: 'prefix-icon', description: '前置图标', type: '-', default: '-', value: '--' },
  { name: 'suffix-icon', description: '后置图标', type: '-', default: '-', value: '--' },
  { name: 'password', description: '密码框', type: '-', default: '-', value: '--' },
  { name: 'size', description: '尺寸', type: '-', default: '-', value: '`lg` `md` `sm` `xs`，默认`md`' },
];

export const events: DocumentEvent[] = [
  { name: 'input', description: '原生 input 事件', parameter: 'event : Event' },
  { name: 'foucs', description: '原生 foucs 事件', parameter: 'event : Event' },
  { name: 'blur', description: '原生 blur 事件', parameter: 'event : Event' },
  { name: 'change', description: '原生 change 事件', parameter: 'event : Event' },
  { name: 'clear', description: '清空 事件', parameter: '--' },
];

export const slots: DocumentSlot[] = [
  { name: 'prefix', description: '输入框前置内容' },
  { name: 'suffix', description: '输入框后置内容' },
  { name: 'prepend', description: '输入框前置内容' },
  { name: 'append', description: '输入框后置内容' },
];

export const docLink: string = 'input';

export const document: LayDocument = { attributes, events, slots, docLink };

export default document;
