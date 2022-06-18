import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'v-model', description: '评分值', type: '`number`', default: '0', value: '' },
  { name: 'length', description: '评分长度', type: '`number`', default: '5', value: '' },
  { name: 'readonly', description: '只读模式', type: '`boolean`', default: 'false', value: '' },
  { name: 'theme', description: '主题颜色', type: '`string`', default: '#ffb800', value: '' },
  { name: 'half', description: '设定组件是否可以选择半星', type: '`boolean`', default: 'false', value: '' },
  { name: 'text', description: '是否显示评分对应的内容', type: '`boolean`', default: 'false', value: '' },
  { name: 'is-block', description: '评分是否显示为快元素', type: '`boolean`', default: 'false', value: '' },
  { name: 'has-clear', description: '评分是否需要清除功能', type: '`boolean`', default: 'false', value: '' },
  {
    name: 'clear-icon',
    description: '评分清除功能使用的图标`class`',
    type: '`string`',
    default: '`layui-icon-close-fill`',
    value: '',
  },
  {
    name: 'icons',
    description: '评分使用图标`class`；`["空心", "实心"]`/`["空心", "半心", "实心"]`',
    type: '`string[]`',
    default: '星型',
    value: '',
  },
];

export const events: DocumentEvent[] = [
  { name: 'select', description: '选中之后触发事件', parameter: '(value: number)' },
  { name: 'clear', description: '清除之后触发事件', parameter: '(value: number)' },
];

export const slots: DocumentSlot[] = [{ name: 'default', description: '默认插槽，自定义内容时可以使用为' }];

export const docLink: string = 'rate';

export const document: LayDocument = { attributes, events, slots, docLink };

export default document;
