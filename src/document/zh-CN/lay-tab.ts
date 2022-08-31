import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'v-model', description: '当前激活', type: '`string`', default: '-', value: '-' },
  { name: 'type', description: '主题样式', type: '`string`', default: '-', value: '-' },
  {
    name: 'tabPosition',
    description: '位置',
    type: '`string`',
    default: '`bottom`',
    value: '`top` `bottom` `left` `right`',
  },
  { name: 'allow-close', description: '允许关闭', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  {
    name: 'before-close',
    description: '`Function`关闭之前的回调钩子函数',
    type: '参数(`id`), `return false` 表示不进行关闭',
    default: '-',
    value: '-',
  },
  {
    name: 'before-leave',
    description: '`Function`切换标签之前的回调钩子函数',
    type: '参数(`id`), `return false` 表示不进行切换',
    default: '-',
    value: '-',
  },
  {
    name: 'activeBarTransition',
    description: '是否开启 activeBar 动画,仅 brief 有效,默认 `false`',
    type: '`boolean`',
    default: '`false`',
    value: '`true` `false`',
  },
];

export const events: DocumentEvent[] = [
  { name: 'change', description: '选中切换', parameter: 'id' },
  { name: 'close', description: '关闭事件', parameter: 'id' },
];

export const docLink: string = 'tab';

export const document: LayDocument = { attributes, events, docLink };

export default document;
