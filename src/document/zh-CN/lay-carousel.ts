import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'v-model', description: '当前激活项', type: '`number`', default: '--', value: '--' },
  { name: 'anim', description: '切换方向', type: '`string`', default: '`default`', value: '`default` `updown`' },
  {
    name: 'indicator',
    description: '控制器位置',
    type: '`string`',
    default: '`inside`',
    value: '`inside` `outside` `none`',
  },
  {
    name: 'arrow',
    description: '切换按钮状态',
    type: '`string`',
    default: '`hover`',
    value: '`hover` `always` `none`',
  },
  { name: 'autoplay', description: '自动播放', type: '`boolean`', default: '`true`', value: '`true` `false`' },
  { name: 'interval', description: '轮播间隔', type: '`number`', default: '`3000`', value: '--' },
];

export const events: DocumentEvent[] = [{ name: 'change', description: '切换回调', parameter: 'id' }];

export const docLink: string = 'carousel';

export const document: LayDocument = { attributes, events, docLink };

export default document;
