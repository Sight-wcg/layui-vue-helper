import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'columns', description: '列配置 - [更多](#tableColumn)', type: '--', default: '--', value: '--' },
  { name: 'dataSource', description: '数据源', type: '--', default: '--', value: '--' },
  { name: 'checkbox', description: '开启复选框', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  { name: 'id', description: '主键', type: '`string`', default: '--', value: '--' },
  { name: 'v-model:selectedKeys', description: '选中项 (多选)', type: '--', default: '--', value: '--' },
  { name: 'v-model:selectedKey', description: '选中项 (单选)', type: '--', default: '--', value: '--' },
  { name: 'default-toolbar', description: '工具栏', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  { name: 'size', description: '尺寸', type: '`string`', default: '`md`', value: '`lg` `md` `sm`' },
  { name: 'children-column-name', description: '树节点字段', type: '`string`', default: '`children`', value: '--' },
  { name: 'indent-size', description: '树表行级缩进', type: '`number`', default: '`30`', value: '--' },
  { name: 'height', description: '表格高度', type: '`number`', default: '--', value: '--' },
  { name: 'maxHeight', description: '表格最大高度', type: '`number`', default: '--', value: '--' },
  { name: 'even', description: '斑马条纹', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  {
    name: 'cellStyle',
    description: '列样式 function(row, column, rowIndex, columnIndex)',
    type: '`string` `function`',
    default: '--',
    value: '--',
  },
  {
    name: 'rowStyle',
    description: '行样式 function(row, rowIndex)',
    type: '`string` `function`',
    default: '--',
    value: '--',
  },
  {
    name: 'cellClassName',
    description: '列类名称 function(row, column, rowIndex, columnIndex)',
    type: '`string` `function`',
    default: '--',
    value: '--',
  },
  {
    name: 'rowClassName',
    description: '行类名称 function(row, rowIndex)',
    type: '`string` `function`',
    default: '--',
    value: '--',
  },
  { name: 'skin', description: '风格', type: '`string`', default: '--', value: '`line` `row` `nob`' },
  { name: 'expand-index', description: '展开所在列', type: '`number`', default: '--', value: '--' },
  {
    name: 'default-expand-all',
    description: '默认展开所有列',
    type: '`boolean`',
    default: '`false`',
    value: '`true` `false`',
  },
  { name: 'expand-keys', description: '展开的列', type: '`array`', default: '`[]`', value: '--' },
  { name: 'span-method', description: '合并算法', type: '`function`', default: '--', value: '--' },
  { name: 'getCheckboxProps', description: '多选行属性', type: '`function`', default: '--', value: '--' },
  { name: 'getRadioProps', description: '单选行属性', type: '`function`', default: '--', value: '--' },
];

export const events: DocumentEvent[] = [
  { name: 'row', description: '行单击', parameter: 'data : 当前行' },
  { name: 'row-double', description: '行双击', parameter: 'data : 当前行' },
  { name: 'row-contextmenu', description: '行右击', parameter: 'data : 当前行' },
  { name: 'change', description: '分页事件', parameter: '{ current: 当前页码, limit: 每页数量 }' },
];

export const slots: DocumentSlot[] = [
  { name: 'toolbar', description: '自定义工具栏' },
  { name: 'footer', description: '底部扩展' },
];

export const docLink: string = 'table';

export const document: LayDocument = { attributes, events, slots, docLink };

export default document;
