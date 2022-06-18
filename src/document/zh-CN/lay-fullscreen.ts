import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'target', description: '可选，要全屏显示的元素', type: '`HTMLElement`', default: '`html`', value: '-' },
  {
    name: 'immersive',
    description: '可选，全屏模式，`false`时浏览器窗口内全屏',
    type: '`boolean`',
    default: 'true',
    value: '`true` `false`',
  },
  {
    name: 'position',
    description: '可选，浏览器窗口内全屏定位模式',
    type: '`string`',
    default: '-',
    value: '`absolute` `fixed`',
  },
  { name: 'zIndex', description: '可选，全屏层级', type: '`string`', default: '-', value: '-' },
];

export const events: DocumentEvent[] = [
  { name: 'fullscreenchange', description: '全屏更改事件回调', parameter: 'isFullscreen 是否全屏' },
];

export const slots: DocumentSlot[] = [{ name: 'default', description: '默认插槽' }];

export const docLink: string = 'fullscreen';

export const document: LayDocument = { attributes, events, slots, docLink };

export default document;
