import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'id', description: '编号', type: '`string`', default: '--', value: '' },
  { name: 'title', description: '标题', type: '`string`', default: '--', value: '' },
  { name: 'disabled', description: '是否禁用', type: '`boolean`', default: '`false`', value: '' },
];

export const slots: DocumentSlot[] = [
  { name: '--', description: '默认插槽 --> 内容' },
  { name: 'title', description: '标题插槽' },
];

export const document: LayDocument = { attributes, slots };

export default document;
