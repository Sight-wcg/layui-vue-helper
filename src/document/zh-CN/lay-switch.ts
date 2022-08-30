import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'name', description: '原生 name 属性', type: '`string`', default: '--', value: '--' },
  { name: 'v-model', description: '是否启用', type: '`boolean` `string` `number`', default: '--', value: '--' },
  { name: 'disabled', description: '禁用', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  { name: 'onswitch-text', description: '启用描述', type: '`string`', default: '`启动`', value: '--' },
  { name: 'unswitch-text', description: '禁用描述', type: '`string`', default: '`禁用`', value: '--' },
  {
    name: 'onswitch-value',
    description: '启用值',
    type: '`boolean` `string` `number`',
    default: '`true`',
    value: '--',
  },
  {
    name: 'unswitch-value',
    description: '禁用值',
    type: '`boolean` `string` `number`',
    default: '`false`',
    value: '--',
  },
  { name: 'size', description: '尺寸', type: '`string`', default: '`md`', value: '`lg` `md` `sm` `xs`' },
  { name: 'loading', description: '加载状态', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  { name: 'loading-icon', description: '加载图标', type: '`string`', default: '`layui-icon-loading-one`', value: '--' },
];

export const events: DocumentEvent[] = [{ name: 'change', description: '切换事件', parameter: 'val : 当前值' }];

export const slots: DocumentSlot[] = [
  { name: 'onswitch-icon', description: '启用图标' },
  { name: 'unswitch-icon', description: '禁用图标' },
];

export const docLink: string = 'switch';

export const document: LayDocument = { attributes, events, slots, docLink };

export default document;
