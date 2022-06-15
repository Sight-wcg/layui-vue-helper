import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'percent', description: '进度', type: '-', default: '-', value: '--' },
  {
    name: 'theme',
    description: '主题',
    type: '-',
    default: '-',
    value: '`orange` `green` `cyan` `blue` `black` `gray`',
  },
  { name: 'size', description: '尺寸', type: '-', default: '-', value: '`big`' },
  { name: 'text', description: '提示', type: '-', default: '-', value: '--' },
  { name: 'color', description: '颜色', type: '-', default: '-', value: '--' },
  { name: 'showText', description: '展示描述', type: '-', default: '-', value: '--' },
];

export const document: LayDocument = { attributes };

export default document;
