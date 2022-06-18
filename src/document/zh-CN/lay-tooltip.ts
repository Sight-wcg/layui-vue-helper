import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'content', description: '显示内容', type: '-', default: '-', value: '--' },
  {
    name: 'position',
    description: '显示位置',
    type: '-',
    default: '-',
    value: '`top`(默认值)、`bottom`、`left`、`right`',
  },
  { name: 'isDark', description: '是否为黑色主题', type: '-', default: '-', value: '`true`(默认值)、`false`(浅色)' },
  { name: 'disabled', description: '是否禁用', type: '`false`(默认值)、`true`(禁用)', default: '', value: '' },
  {
    name: 'isCanHide',
    description: '控制是否可以隐藏,可参考`lay-slider`组件',
    type: '`true`(默认值)、`false`',
    default: '',
    value: '',
  },
  {
    name: 'isAutoShow',
    description: '控制超出文本 `...` 时自动展示， 没有 `...` 时不展示',
    type: '`false`(默认值)、`true`',
    default: '',
    value: '',
  },
];

export const docLink: string = 'tooltip';

export const document: LayDocument = { attributes, docLink };

export default document;
