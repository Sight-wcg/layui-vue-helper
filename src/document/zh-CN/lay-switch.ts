import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'name', description: '原生 name 属性', type: '-', default: '-', value: '--' },
  { name: 'v-model', description: '是否启用', type: '-', default: '-', value: '`true` `false`' },
  { name: 'disabled', description: '禁用', type: '-', default: '-', value: '`true` `false`' },
  { name: 'onswitch-text', description: '启用描述', type: '-', default: '-', value: '`启动`' },
  { name: 'unswitch-text', description: '禁用描述', type: '-', default: '-', value: '`禁用`' },
  { name: 'onswitch-value', description: '启用值', type: '-', default: '-', value: '`true`' },
  { name: 'unswitch-value', description: '禁用值', type: '-', default: '-', value: '`false`' },
];

export const events: DocumentEvent[] = [{ name: 'change', description: '切换事件', parameter: 'val : 当前值' }];

export const slots: DocumentSlot[] = [
  { name: 'onswitch-icon', description: '启用图标' },
  { name: 'unswitch-icon', description: '禁用图标' },
];

export const docLink: string = 'switch';

export const document: LayDocument = { attributes, events, slots, docLink };

export default document;
