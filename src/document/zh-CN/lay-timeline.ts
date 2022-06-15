import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'direction', description: '排列方向', type: '-', default: '-', value: '`horizontal` `vertical`' },
];

export const document: LayDocument = { attributes };

export default document;
