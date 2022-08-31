import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'percent', description: '进度', type: '`string`', default: '--', value: '--' },
  {
    name: 'theme',
    description: '主题',
    type: '`string`',
    default: '`green`',
    value: '`orange` `green` `cyan` `blue` `black` `gray`',
  },
  { name: 'size', description: '尺寸', type: '`string`', default: '`big`', value: '`big` ` `' },
  { name: 'text', description: '提示', type: '`string`', default: '--', value: '--' },
  { name: 'color', description: '颜色', type: '`string`', default: '--', value: '--' },
  { name: 'showText', description: '展示描述', type: '`string`', default: '--', value: '--' },
  { name: 'circle', description: '环形进度条', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  { name: 'circleSize', description: '环形进度条尺寸,单位 px', type: '`number`', default: '`150`', value: '-' },
  { name: 'circleWidth', description: '环形进度条线条宽度,单位是 px', type: '`number`', default: '`6`', value: '-' },
];

export const docLink: string = 'progress';

export const document: LayDocument = { attributes, docLink };

export default document;
