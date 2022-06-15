import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'nm', description: '灰色样式', type: '-', default: '-', value: '--' },
];

export const document: LayDocument = { attributes };

export default document;
