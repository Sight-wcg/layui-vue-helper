import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'title', description: '标题', type: '`string`', default: '--', value: '--' },
  { name: 'shadow', description: '阴影', type: '`string`', default: '`always`', value: '`always` `hover` `never`' },
];

export const slots: DocumentSlot[] = [
  { name: 'default', description: '默认插槽' },
  { name: 'header', description: '头部插槽' },
  { name: 'body', description: '内容插槽' },
  { name: 'extra', description: '扩展插槽' },
];

export const docLink: string = 'card';

export const document: LayDocument = { attributes, slots, docLink };

export default document;
