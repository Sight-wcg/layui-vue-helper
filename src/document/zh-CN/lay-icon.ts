import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'type', description: '图标', type: '-', default: '-', value: '`layui-icon-home`' },
  { name: 'prefix', description: '前缀', type: '-', default: '-', value: '`layui-icon`' },
  { name: 'color', description: '颜色', type: '-', default: '-', value: '--' },
  { name: 'size', description: '尺寸', type: '-', default: '-', value: '--' },
];

export const docLink: string = 'icon';

export const document: LayDocument = { attributes, docLink };

export default document;
