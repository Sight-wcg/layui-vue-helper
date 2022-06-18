import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'dataSource', description: '数据来源', type: '-', default: '-', value: '--' },
  { name: 'title', description: '标题', type: '-', default: '-', value: '--' },
  { name: 'id', description: '主键', type: '-', default: '-', value: '--' },
  { name: 'showSearch', description: '开启搜索', type: '-', default: '-', value: '--' },
  { name: 'width', description: '左右盒子宽度', type: '-', default: '-', value: '`200px`' },
  { name: 'height', description: '左右盒子高度', type: '-', default: '-', value: '`360px`' },
];

export const slots: DocumentSlot[] = [{ name: 'item', description: '列表项' }];

export const docLink: string = 'transfer';

export const document: LayDocument = { attributes, slots, docLink };

export default document;
