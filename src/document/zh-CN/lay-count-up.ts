import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'startVal', description: '起始值', type: 'number', default: '`0`', value: '—' },
  { name: 'endVal', description: '显示的值', type: 'number', default: '`0`', value: '—' },
  { name: 'decimal', description: '小数点', type: 'string', default: '`.`', value: '—' },
  { name: 'decimalPlaces', description: '小数位数', type: 'number', default: '`0`', value: '—' },
  {
    name: 'useGrouping',
    description: '是否使用千位分隔符',
    type: 'boolean',
    default: '`true`',
    value: '`true` `false`',
  },
  { name: 'separator', description: '分隔符', type: 'string', default: '`,`', value: '—' },
  { name: 'autoplay', description: '是否自动播放', type: 'boolean', default: '`true`', value: '`true` `false`' },
  { name: 'useEasing', description: '是否使用动画', type: 'boolean', default: '`true`', value: '`true` `false`' },
  {
    name: 'easingFn',
    description: '动画类型',
    type: '`Array` `Function` `string`',
    default: '`easeInOutCubic`',
    value: '`easeInCubic` `easeOutCubic` `easeInOutCubic`',
  },
  { name: 'duration', description: '动画持续时间,单位: ms', type: 'number', default: '`2000`', value: '—' },
  { name: 'prefix', description: '前缀', type: 'string', default: '—', value: '—' },
  { name: 'suffix', description: '后缀', type: 'string', default: '—', value: '—' },
];

export const slots: DocumentSlot[] = [
  { name: 'prefix', description: '前缀' },
  { name: 'suffix', description: '后缀' },
];

export const docLink: string = 'countup';

export const document: LayDocument = { attributes, slots, docLink };

export default document;
