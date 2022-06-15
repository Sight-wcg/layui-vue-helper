import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'enable', description: '启用', type: '`boolean`', default: '`true`', value: '`true` `false`' },
  { name: 'type', description: '类型', type: '`string`', default: '`collapse`', value: '`collapse`, `fade`' },
];

export const document: LayDocument = { attributes };

export default document;
