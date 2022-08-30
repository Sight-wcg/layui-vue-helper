import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'type',
    description: '主题',
    type: '`string`',
    default: '`primary`',
    value: '`primary` `normal` `warm` `danger`',
  },
  { name: 'size', description: '尺寸', type: '`string`', default: '--', value: '`lg` `sm` `xs`' },
  { name: 'fluid', description: '最大化', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  { name: 'radius', description: '圆角', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  { name: 'border', description: '边框', type: '`string`', default: '`green`', value: '`green` `blue` `orange` `red`' },
  {
    name: 'border-style',
    description: '边框样式',
    type: '`string`',
    default: '`soild`',
    value: '`soild` `dashed` `dotted`',
  },
  { name: 'disabled', description: '禁用', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  { name: 'loading', description: '加载', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  {
    name: 'native-type',
    description: '原生类型',
    type: '`string`',
    default: '`button`',
    value: '`button` `submit` `reset`',
  },
  { name: 'prefix-icon', description: '前置图标', type: '`string`', default: '--', value: '内置 icon 集' },
  { name: 'suffix-icon', description: '后置图标', type: '`string`', default: '--', value: '内置 icon 集' },
  { name: 'loading-icon', description: '后置图标', type: '`string`', default: '--', value: '内置 icon 集' },
];

export const slots: DocumentSlot[] = [{ name: 'default', description: '默认内容' }];

export const docLink: string = 'button';

export const document: LayDocument = { attributes, slots, docLink };

export default document;
