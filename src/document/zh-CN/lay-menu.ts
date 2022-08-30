import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'v-model:selectedKey', description: '选中项', type: '-', default: '-', value: '--' },
  { name: 'v-model:openKeys', description: '打开项', type: '-', default: '-', value: '--' },
  { name: 'theme', description: '菜单主题', type: '`string`', default: '`dark`', value: '`dark` `light`' },
  { name: 'inverted', description: '特殊的激活样式', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  { name: 'level', description: '是否开启菜单层级', type: '`boolean`', default: '`true`', value: '`true` `false`' },
  { name: 'collapse', description: '折叠状态', type: '`boolean`', default: '`true`', value: '`true` `false`' },
  {
    name: 'collapse-transition',
    description: '折叠动画',
    type: '`boolean`',
    default: '`true`',
    value: '`true` `false`',
  },
];

export const events: DocumentEvent[] = [
  { name: 'changeSelectedKey', description: '选中菜单回调', parameter: 'value: string' },
  { name: 'changeOpenKeys', description: '展开目录回调', parameter: 'value: string[]' },
];

export const docLink: string = 'menu';

export const document: LayDocument = { attributes, events, docLink };

export default document;
