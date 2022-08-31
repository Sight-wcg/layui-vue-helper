import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'nm', description: '灰色样式', type: '`boolean`', default: '`false`', value: '`true` `false`' },
];

export const docLink: string = 'quote';

export const document: LayDocument = { attributes, docLink };

export default document;
