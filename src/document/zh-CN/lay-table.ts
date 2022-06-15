import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'columns', description: '列配置 - [更多](#tableColumn)', type: '--', default: '--', value: '--' },
  { name: 'dataSource', description: '数据源', type: '--', default: '--', value: '--' },
  { name: 'checkbox', description: '开启复选框', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  { name: 'id', description: '主键', type: '`string`', default: '--', value: '--' },
  { name: 'v-model:selectedKeys', description: '选中项', type: '--', default: '--', value: '--' },
  { name: 'default-toolbar', description: '工具栏', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  { name: 'size', description: '尺寸', type: '`string`', default: '`md`', value: '`lg` `md` `sm`' },
  { name: 'children-column-name', description: '树节点字段', type: '`string`', default: '`children`', value: '--' },
  { name: 'indent-size', description: '树表行级缩进', type: '`number`', default: '`30`', value: '--' },
  { name: 'height', description: '表格高度', type: '`number`', default: '--', value: '--' },
  { name: 'maxHeight', description: '表格最大高度', type: '`number`', default: '--', value: '--' },
];

export const events: DocumentEvent[] = [
  { name: 'row', description: '行单击', parameter: 'data : 当前行' },
  { name: 'row-double', description: '行双击', parameter: 'data : 当前行' },
];

export const slots: DocumentSlot[] = [{ name: 'toolbar', description: '自定义工具栏' }];

export const document: LayDocument = { attributes, events, slots };

export default document;
