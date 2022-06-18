import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'name', description: '原始属性 name', type: '-', default: '-', value: '--' },
  { name: 'placeholder', description: '提示信息', type: '-', default: '-', value: '--' },
  { name: 'disabled', description: '禁用', type: '-', default: '-', value: '`true` `false`' },
  { name: 'v-model', description: '值', type: '-', default: '-', value: '--' },
  { name: 'show-count', description: '显示字数', type: '-', default: '-', value: '--' },
];

export const events: DocumentEvent[] = [
  { name: 'input', description: '原生 input 事件', parameter: 'event : 事件对象' },
  { name: 'foucs', description: '原生 foucs 事件', parameter: 'event : 事件对象' },
  { name: 'blur', description: '原生 blur 事件', parameter: '--' },
];

export const docLink: string = 'textarea';

export const document: LayDocument = { attributes, events, docLink };

export default document;
