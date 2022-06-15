import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'name', description: '原始属性 name', type: '-', default: '-', value: '--' },
  { name: 'skin', description: '主题', type: '-', default: '-', value: '--' },
  { name: 'label', description: '选中值', type: '-', default: '-', value: '--' },
  { name: 'v-model', description: '是否选中', type: '-', default: '-', value: '`true` `false`' },
  { name: 'change', description: '切换事件', type: '-', default: '-', value: 'isChecked : 当前状态' },
];

export const events: DocumentEvent[] = [{ name: 'change', description: '切换事件', parameter: 'isChecked : 当前状态' }];

export const document: LayDocument = { attributes, events };

export default document;
