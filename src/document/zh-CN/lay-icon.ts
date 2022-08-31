import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'type', description: '图标', type: '`string`', default: '-', value: '-' },
  { name: 'prefix', description: '前缀', type: '`string`', default: '`layui-icon`', value: '-' },
  { name: 'color', description: '颜色', type: '`string`', default: '--', value: '-' },
  { name: 'size', description: '尺寸', type: '`string`', default: '--', value: '-' },
];

export const docLink: string = 'icon';

export const document: LayDocument = { attributes, docLink };

export default document;
