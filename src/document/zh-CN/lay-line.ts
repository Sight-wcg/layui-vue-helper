import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'direction',
    description: '分割线的方向',
    type: '`string`',
    default: '`horizontal`',
    value: '`horizontal` `vertical`',
  },
  {
    name: 'contentPosition',
    description: '分割线内容位置',
    type: '`string`',
    default: '`center`',
    value: '`center` `left` `right`',
  },
  { name: 'offset', description: '分割线内容偏移量。e.g. `30px` `20%`', type: '`string`', default: '-', value: '-' },
  {
    name: 'theme',
    description: '主题, 除内置颜色外，支持自定义颜色。 e.g. #EEEEEE',
    type: '`string`',
    default: '`gray`',
    value: '`red` `orange` `green` `cyan` `blue` `black` `gray`',
  },
  { name: 'borderWidth', description: '分割线宽度，单位 px。 e.g. `2px`', type: '`string`', default: '', value: '-' },
  {
    name: 'borderStyle',
    description: '分割线样式',
    type: '`string`',
    default: '`solid`',
    value: '`solid` `dashed` `dotted` `double` `groove` `ridge` `inset` `outset`',
  },
  { name: 'margin', description: '分割线边距,默认 8px', type: '`string`', default: '', value: '-' },
];

export const slots: DocumentSlot[] = [{ name: 'default', description: '默认插槽，仅支持 direction 为 `horizontal`' }];

export const docLink: string = 'line';

export const document: LayDocument = { attributes, slots, docLink };

export default document;
