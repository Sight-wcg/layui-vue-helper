import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'data', description: '树型组件数据,类型 TreeData \\', type: 'TreeData[]', default: 'null', value: '' },
  { name: 'showCheckbox', description: '是否显示复选框', type: '-', default: '-', value: 'false' },
  {
    name: 'onlyIconControl',
    description: '是否仅允许节点左侧图标控制展开收缩',
    type: '-',
    default: '-',
    value: 'false',
  },
  { name: 'showLine', description: '是否开启连接线', type: '-', default: '-', value: 'true' },
  {
    name: 'checkedKeys(v-model:checkedKeys)',
    description: '开启 showCheckbox 后, 选中的节点',
    type: '-',
    default: '-',
    value: '[]',
  },
  { name: 'collapse-transition', description: '是否开启展示收起动画', type: '-', default: '-', value: 'false' },
];

export const events: DocumentEvent[] = [{ name: 'node-click', description: '节点 click 事件', parameter: '--' }];

export const docLink: string = 'tree';

export const document: LayDocument = { attributes, events, docLink };

export default document;
