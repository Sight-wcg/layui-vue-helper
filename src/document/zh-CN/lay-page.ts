import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'v-model', description: '当前页', type: '-', default: '-', value: '--' },
  { name: 'limit', description: '每页数量', type: '-', default: '-', value: '--' },
  { name: 'total', description: '总条数', type: '-', default: '-', value: '--' },
  { name: 'showCount', description: '显示总数', type: '-', default: '-', value: '`false`' },
  { name: 'showPage', description: '显示每页', type: '-', default: '-', value: '`false`' },
  { name: 'showLimit', description: '显示每页数量', type: '-', default: '-', value: '`false`' },
  { name: 'showRefresh', description: '显示刷新按钮', type: '-', default: '-', value: '`false`' },
  { name: 'showSkip', description: '显示跳转', type: '-', default: '-', value: '`false`' },
  { name: 'pages', description: '显示切页按钮数量', type: '-', default: '-', value: '`10`' },
  { name: 'limits', description: '切换每页数量的选择项', type: '-', default: '-', value: '`[10,20,30,40,50]`' },
];

export const events: DocumentEvent[] = [
  { name: 'jump', description: '切换回调', parameter: '{ current: 当前页面 }' },
  { name: 'limit', description: '每页数量变化', parameter: '变化后的值' },
];

export const slots: DocumentSlot[] = [
  { name: 'prev', description: '上一页' },
  { name: 'next', description: '下一页' },
];

export const docLink: string = 'page';

export const document: LayDocument = { attributes, events, slots, docLink };

export default document;
