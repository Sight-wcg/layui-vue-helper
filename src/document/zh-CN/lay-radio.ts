import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'name', description: '原始属性 name', type: '`string`', default: '--', value: '--' },
  { name: 'label', description: '当前显示的值', type: '`string`', default: '--', value: '--' },
  { name: 'v-model', description: '选中值', type: '-', default: '-', value: '-' },
  { name: 'size', description: '尺寸', type: '`lg` `md` `sm` `xs`', default: '`md`', value: '-' },
];

export const events: DocumentEvent[] = [{ name: 'change', description: '切换事件', parameter: 'current : 当前值' }];

export const docLink: string = 'radio';

export const document: LayDocument = { attributes, events, docLink };

export default document;
