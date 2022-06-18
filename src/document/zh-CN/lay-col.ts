import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'xs',
    description: '尺寸 - 超小屏幕 (手机< 768px)',
    type: '`number` `string`',
    default: '--',
    value: '0 - 24',
  },
  { name: 'sm', description: '尺寸 - 小屏幕 (平板 ≥768px)', type: '`number` `string`', default: '--', value: '0 - 24' },
  {
    name: 'md',
    description: '尺寸 - 中等屏幕 (桌面 ≥992px)',
    type: '`number` `string`',
    default: '--',
    value: '0 - 24',
  },
  {
    name: 'lg',
    description: '尺寸 - 大型屏幕 (桌面 ≥1200px)',
    type: '`number` `string`',
    default: '--',
    value: '0 - 24',
  },
  {
    name: 'xs-offset',
    description: '偏移 - 超小屏幕 (手机< 768px)',
    type: '`number` `string`',
    default: '--',
    value: '0 - 24',
  },
  {
    name: 'sm-offset',
    description: '偏移 - 小屏幕 (平板 ≥768px)',
    type: '`number` `string`',
    default: '--',
    value: '0 - 24',
  },
  {
    name: 'md-offset',
    description: '偏移 - 中等屏幕 (桌面 ≥992px)',
    type: '`number` `string`',
    default: '--',
    value: '0 - 24',
  },
  {
    name: 'lg-offset',
    description: '偏移 - 大型屏幕 (桌面 ≥1200px)',
    type: '`number` `string`',
    default: '--',
    value: '0 - 24',
  },
];

export const docLink: string = 'grid';

export const document: LayDocument = { attributes, docLink };

export default document;
