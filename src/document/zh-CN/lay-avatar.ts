import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'src', description: '图源', type: 'string', default: '-', value: '--' },
  { name: 'size', description: '尺寸', type: 'string', default: '-', value: '`xs` `sm` `lg`' },
  { name: 'radius', description: '圆形', type: 'string', default: '-', value: '`true` `false`' },
  { name: 'alt', description: '描述图像的替换文本', type: '-', default: '-', value: '--' },
];

export const document: LayDocument = { attributes };

export default document;
