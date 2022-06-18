import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'title', description: '标题', type: '-', default: '-', value: '--' },
];

export const docLink: string = 'field';

export const document: LayDocument = { attributes, docLink };

export default document;
