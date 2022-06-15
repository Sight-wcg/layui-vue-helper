import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'height', description: '高度', type: '-', default: '-', value: '--' },
  { name: 'thumbWidth', description: '滑块宽度', type: '-', default: '-', value: '--' },
  { name: 'thumbColor', description: '滑块颜色', type: '-', default: '-', value: '--' },
  { name: 'trackColor', description: '滑槽颜色', type: '-', default: '-', value: '--' },
];

export const document: LayDocument = { attributes };

export default document;
