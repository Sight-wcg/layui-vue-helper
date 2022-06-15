import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'v-model:selectedKey', description: '选中项', type: '-', default: '-', value: '--' },
  { name: 'v-model:openKeys', description: '打开项', type: '-', default: '-', value: '--' },
  { name: 'theme', description: '菜单主题', type: '-', default: '-', value: '`dark` `light`' },
  { name: 'inverted', description: '特殊的激活样式', type: '-', default: '-', value: '`true` `false`' },
  { name: 'level', description: '菜单层级', type: '-', default: '-', value: '`true` `false`' },
  { name: 'collapse', description: '折叠状态', type: '-', default: '-', value: '`true` `false`' },
  { name: 'collapse-transition', description: '折叠动画', type: '-', default: '-', value: '`true` `false`' },
];

export const document: LayDocument = { attributes };

export default document;
