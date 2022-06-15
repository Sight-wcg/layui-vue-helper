import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'name', description: '原始属性 name', type: '-', default: '-', value: '--' },
  { name: 'label', description: '当前值', type: '-', default: '-', value: '--' },
  { name: 'v-model', description: '选中值', type: '-', default: '-', value: '--' },
];

export const events: DocumentEvent[] = [{ name: 'change', description: '切换事件', parameter: 'current : 当前值' }];

export const document: LayDocument = { attributes, events };

export default document;
