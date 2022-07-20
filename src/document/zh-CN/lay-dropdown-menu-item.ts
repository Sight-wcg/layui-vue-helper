import { LayDocument } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const slots: DocumentSlot[] = [
  { name: 'prefix', description: '前缀' },
  { name: 'default', description: '默认' },
  { name: 'suffix', description: '后缀' },
];

export const docLink: string = 'dropdown';

export const document: LayDocument = { slots, docLink };

export default document;
