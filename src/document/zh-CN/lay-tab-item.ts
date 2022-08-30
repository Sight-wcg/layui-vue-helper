import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'id', description: '唯一标识', type: '-', default: '-', value: '--' },
  { name: 'title', description: '头部标题,支持渲染函数', type: '-', default: '-', value: '--' },
  { name: 'closable', description: '允许关闭', type: '-', default: '-', value: '--' },
];

export const slots: DocumentSlot[] = [{ name: 'title', description: '头部标题' }];

export const docLink: string = 'tab';

export const document: LayDocument = { attributes, slots, docLink };

export default document;
