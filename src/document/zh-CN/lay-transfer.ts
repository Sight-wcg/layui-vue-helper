import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'dataSource', description: '数据来源', type: '-', default: '-', value: '-' },
  { name: 'title', description: '标题', type: '`string`', default: '-', value: '-' },
  { name: 'id', description: '主键', type: '`string`', default: '-', value: '-' },
  { name: 'showSearch', description: '开启搜索', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  { name: 'width', description: '左右盒子宽度', type: '`string`', default: '`200px`', value: '-' },
  { name: 'height', description: '左右盒子高度', type: '`string`', default: '`360px`', value: '-' },
];

export const slots: DocumentSlot[] = [
  { name: 'item', description: '列表项' },
  { name: 'leftFooter', description: '左侧盒子底部内容' },
  { name: 'rightFooter', description: '右侧盒子底部内容' },
];

export const docLink: string = 'transfer';

export const document: LayDocument = { attributes, slots, docLink };

export default document;
