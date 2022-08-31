import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'mode', description: '模式', type: '`string`', default: '`link`', value: "'link' 'closeable'" },
  { name: 'text', description: '滚动内容', type: '`string`', default: '-', value: '-' },
  { name: 'leftIcon', description: '左侧图标', type: '`string`', default: '--', value: '-' },
  { name: 'rightIcon', description: '右侧图标', type: '`string`', default: '--', value: '-' },
  { name: 'scrollable', description: '是否开启垂直滚动', type: '`boolean`', default: '`false`', value: 'true,false' },
  { name: 'textlist', description: '垂直滚动内容', type: 'string[]', default: '-', value: '-' },
];

export const docLink: string = 'noticeBar';

export const document: LayDocument = { attributes, docLink };

export default document;
