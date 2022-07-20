import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'disabled', description: '是否整体禁用', type: '-', default: '-', value: '`true` `false`' },
];

export const docLink: string = 'checkbox';

export const document: LayDocument = { attributes, docLink };

export default document;
