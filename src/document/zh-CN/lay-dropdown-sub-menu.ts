import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'trigger',
    description: '触发方式,类型 `string` 或 trigger 数组',
    type: '`strine`',
    default: '`click`',
    value: '`click` `hover` `focus` `contextMenu`',
  },
  { name: 'disabled', description: '是否禁用触发', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  {
    name: 'placement',
    description: '下拉面板位置',
    type: '`string`',
    default: '`bottom`',
    value: '`top` `bottom` `right` `left` `*-start` `*-end`',
  },
  {
    name: 'contentOffset',
    description: '下拉面板距离触发器的偏移距离，默认 2',
    type: '`string`',
    default: '2px',
    value: '-',
  },
];

export const slots: DocumentSlot[] = [
  { name: 'prefix', description: '前缀' },
  { name: 'default', description: '默认' },
  { name: 'suffix', description: '后缀' },
  { name: 'content', description: '下拉面板内容' },
];

export const docLink: string = 'dropdown';

export const document: LayDocument = { attributes, slots, docLink };

export default document;
