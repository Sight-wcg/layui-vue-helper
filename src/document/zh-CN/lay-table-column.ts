import { LayDocument } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const slots: DocumentSlot[] = [
  { name: 'title', description: '列标题' },
  { name: 'key', description: '数据字段' },
  { name: 'customSlot', description: '自定义插槽' },
  { name: 'width', description: '宽度' },
  { name: 'minWidth', description: '最小宽度' },
  { name: 'sort', description: '排序' },
  { name: 'titleSlot', description: '标题插槽' },
  { name: 'align', description: '对齐方式' },
  { name: 'ellipsisTooltip', description: '当内容过长被隐藏时显示 tooltip' },
];

export const document: LayDocument = { slots };

export default document;
