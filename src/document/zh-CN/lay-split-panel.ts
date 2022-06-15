import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'vertical', description: '是否垂直布局', type: 'Boolean', default: '`true` `false`', value: 'false' },
  { name: 'minSize', description: '块拉动最小范围(按像素 `px`)', type: 'number', default: '-', value: '50' },
];

export const document: LayDocument = { attributes };

export default document;
