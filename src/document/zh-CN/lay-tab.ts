import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'v-model', description: '当前激活', type: '-', default: '-', value: '--' },
  { name: 'type', description: '主题样式', type: '-', default: '-', value: '--' },
  { name: 'tabPosition', description: '位置', type: '-', default: '-', value: '`top`  `bottom` `left` `right`' },
  { name: 'allow-close', description: '允许关闭', type: '-', default: '-', value: '`true` `false`' },
  {
    name: 'before-close',
    description: '`Function`关闭之前的回调钩子函数',
    type: '-',
    default: '-',
    value: '参数(`id`), `return false` 表示不进行关闭',
  },
  {
    name: 'before-leave',
    description: '`Function`切换标签之前的回调钩子函数',
    type: '-',
    default: '-',
    value: '参数(`id`), `return false` 表示不进行切换',
  },
];

export const events: DocumentEvent[] = [
  { name: 'change', description: '选中切换', parameter: 'id' },
  { name: 'close', description: '关闭事件', parameter: 'id' },
];

export const document: LayDocument = { attributes, events };

export default document;
