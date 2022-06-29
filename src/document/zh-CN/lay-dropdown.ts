import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'visible', description: '下拉面板是否可见', type: '-', default: '-', value: '`true` `false`' },
  {
    name: 'trigger',
    description: '触发方式,类型 `string` 或 trigger 数组',
    type: '-',
    default: '-',
    value: '`click` `hover` `focus` `contextMenu`',
  },
  { name: 'disabled', description: '是否禁用触发', type: '-', default: '-', value: '`true` `false`' },
  {
    name: 'placement',
    description: '下拉面板位置',
    type: '-',
    default: '-',
    value: '`top` `bottom` `right` `left` `*-left` `*-right` `*-top` `*-bottom`',
  },
  {
    name: 'autoFitPosition',
    description: '是否自动调整下拉面板位置，默认 `true`',
    type: '-',
    default: '-',
    value: '`true` `false`',
  },
  {
    name: 'autoFitWidth',
    description: '是否将下拉面板宽度设置为触发器宽度, 默认 `false`',
    type: '-',
    default: '-',
    value: '`true` `false`',
  },
  {
    name: 'autoFitMinWidth',
    description: '是否将下拉面板最小宽度设置为触发器宽度, 默认 `true`',
    type: '-',
    default: '-',
    value: '`true` `false`',
  },
  {
    name: 'updateAtScroll',
    description: '是否在容器滚动时更新下拉面板的位置,默认 `false`',
    type: '-',
    default: '-',
    value: '`true` `false`',
  },
  {
    name: 'autoFixPosition',
    description: '是否在触发器或下拉面板尺寸变化时更新下拉面板位置,默认 `true`',
    type: '-',
    default: '-',
    value: '`true` `false`',
  },
  {
    name: 'clickToClose',
    description: '是否在点击触发器时关闭面板,默认 `true`',
    type: '-',
    default: '-',
    value: '`true` `false`',
  },
  {
    name: 'blurToClose',
    description: '是否在触发器失去焦点时关闭面板,默认 `true`',
    type: '-',
    default: '-',
    value: '`true` `false`',
  },
  {
    name: 'clickOutsideToClose',
    description: '是否点击外部关闭下拉面板,默认 `true`',
    type: '-',
    default: '-',
    value: '`true` `false`',
  },
  { name: 'contentOffset', description: '下拉面板距离触发器的偏移距离，默认 2', type: '-', default: '-', value: '-' },
];

export const events: DocumentEvent[] = [
  { name: 'hide', description: '隐藏下拉内容后触发', parameter: '--' },
  { name: 'open', description: '显示下拉内容后触发', parameter: '--' },
];

export const slots: DocumentSlot[] = [{ name: 'content', description: '下拉内容' }];

export const docLink: string = 'dropdown';

export const document: LayDocument = { attributes, events, slots, docLink };

export default document;
