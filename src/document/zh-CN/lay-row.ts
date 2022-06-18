import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'space', description: '间隔', type: '`number` `string`', default: '--', value: '0 - 30' },
];

export const docLink: string = 'grid';

export const document: LayDocument = { attributes, docLink };

export default document;
