import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'mode', description: '模式', type: '-', default: '-', value: "'link' 'closeable'" },
  { name: 'text', description: '内容', type: '-', default: '-', value: '滚动内容' },
  { name: 'leftIcon', description: '左侧图标', type: '-', default: '-', value: '--' },
  { name: 'rightIcon', description: '右侧图标', type: '-', default: '-', value: '--' },
  { name: 'scrollable', description: '是否开启垂直滚动', type: '-', default: '-', value: 'true,false' },
  { name: 'textlist', description: '垂直滚动内容', type: '-', default: '-', value: 'Array' },
];

export const docLink: string = 'noticeBar';

export const document: LayDocument = { attributes, docLink };

export default document;
