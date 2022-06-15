import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'v-model', description: '选中值', type: '`string`/`number`/`Array`', default: '-', value: '-' },
  { name: 'name', description: '原生 name 属性', type: '`string`', default: '-', value: '-' },
  { name: 'placeholder', description: '默认空提示语', type: '`string`', default: '-', value: '`请选择`' },
  { name: 'disabled', description: '是否禁用', type: '`boolean`', default: '`true` `false`', value: '`false`' },
  {
    name: 'showEmpty',
    description: '是否增加空提示选项',
    type: '`boolean`',
    default: '`true` `false`',
    value: '`true`',
  },
  { name: 'multiple', description: '是否为多选', type: '`boolean`', default: '`true` `false`', value: '`false`' },
  { name: 'create', description: '是否允许创建', type: '`boolean`', default: '`true` `false`', value: '`false`' },
];

export const events: DocumentEvent[] = [
  { name: 'change', description: '切换事件', parameter: 'value' },
  { name: 'search', description: '关键词变化事件', parameter: '用户输入的关键词 string' },
  { name: 'create', description: '允许创建情况下的创建回调事件', parameter: '用户输入的关键词 string' },
];

export const document: LayDocument = { attributes, events };

export default document;
