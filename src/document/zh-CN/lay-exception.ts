import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'title', description: '标题', type: '-', default: '-', value: '--' },
  { name: 'status', description: '状态', type: '-', default: '-', value: '`403` `404` `500`' },
  { name: 'describe', description: '描述信息', type: '-', default: '-', value: '--' },
];

export const slots: DocumentSlot[] = [{ name: 'extra', description: '操作' }];

export const document: LayDocument = { attributes, slots };

export default document;
