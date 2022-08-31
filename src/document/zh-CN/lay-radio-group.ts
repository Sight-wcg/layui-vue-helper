import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'v-model', description: '选中值', type: '--', default: '-', value: '-' },
  { name: 'disabled', description: '是否整体禁用', type: '`boolean`', default: '`false`', value: '`true` `false`' },
];

export const events: DocumentEvent[] = [{ name: 'change', description: '切换事件', parameter: 'current : 当前值' }];

export const docLink: string = 'radio';

export const document: LayDocument = { attributes, events, docLink };

export default document;
