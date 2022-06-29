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
  { name: 'circle', description: '环形进度条', type: '-', default: '-', value: '默认为 `false`' },
  { name: 'circleSize', description: '环形进度条尺寸', type: '-', default: '-', value: '默认为 `150` 单位是px' },
  { name: 'circleWidth', description: '环形进度条线条宽度', type: '-', default: '-', value: '默认为 `6` 单位是px' },
];

export const docLink: string = 'progress';

export const document: LayDocument = { attributes, docLink };

export default document;
