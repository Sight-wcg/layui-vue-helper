import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'trigger',
    description: '触发方式,类型 `string` 或 trigger 数组,默认 hover',
    type: '-',
    default: '-',
    value: '`click` `hover` `focus` `contextMenu`',
  },
  { name: 'disabled', description: '是否禁用触发', type: '-', default: '-', value: '`true` `false`' },
  {
    name: 'placement',
    description: '下拉面板位置,默认 right-top',
    type: '-',
    default: '-',
    value: '`top` `bottom` `right` `left` `*-left` `*-right` `*-top` `*-bottom`',
  },
  { name: 'contentOffset', description: '下拉面板距离触发器的偏移距离，默认 2', type: '-', default: '-', value: '-' },
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
