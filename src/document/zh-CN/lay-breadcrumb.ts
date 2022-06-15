import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'separator', description: '分割符', type: 'string', default: '`/`', value: '-' },
];

export const slots: DocumentSlot[] = [{ name: 'default', description: '默认插槽' }];

export const document: LayDocument = { attributes, slots };

export default document;
