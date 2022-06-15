import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'fluid', description: '流模式', type: '`boolean` `string`', default: '`flase`', value: '`true` `false`' },
];

export const document: LayDocument = { attributes };

export default document;
