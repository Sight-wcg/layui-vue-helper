import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'title', description: '标题', type: '-', default: '-', value: '--' },
];

export const document: LayDocument = { attributes };

export default document;
