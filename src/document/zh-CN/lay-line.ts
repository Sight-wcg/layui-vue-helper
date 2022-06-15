import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'direction', description: '分割线的方向', type: '-', default: '-', value: '`horizontal` `vertical`' },
  { name: 'contentPosition', description: '分割线内容位置', type: '-', default: '-', value: '`center` `left` `right`' },
  { name: 'offset', description: '分割线内容偏移量，单位 px', type: '-', default: '-', value: 'eg: `30px` `20%`' },
  {
    name: 'theme',
    description: '主题',
    type: '-',
    default: '-',
    value: '`red` `orange` `green` `cyan` `blue` `black` `gray` 或 string',
  },
  { name: 'borderWidth', description: '分割线宽度，单位 px', type: '-', default: '-', value: 'eg: `2px`' },
  {
    name: 'borderStyle',
    description: '分割线样式',
    type: '-',
    default: '-',
    value: '<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style">参见MDN：border-style</a>',
  },
];

export const slots: DocumentSlot[] = [{ name: 'default', description: '默认插槽，仅支持 direction 为 `horizontal`' }];

export const document: LayDocument = { attributes, slots };

export default document;
