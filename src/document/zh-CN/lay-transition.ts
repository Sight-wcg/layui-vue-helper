import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'enable', description: '启用', type: '`boolean`', default: '`true`', value: '`true` `false`' },
  { name: 'type', description: '类型', type: '`string`', default: '`collapse`', value: '`collapse`, `fade`' },
  { name: 'time', description: '自定义过渡时常', type: '-', default: '-', value: '-' },
];

export const docLink: string = 'transition';

export const document: LayDocument = { attributes, docLink };

export default document;
