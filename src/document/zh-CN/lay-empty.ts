import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'description', description: '描述信息', type: '`string`', default: '-', value: '--' },
];

export const slots: DocumentSlot[] = [{ name: 'extra', description: '扩展插槽' }];

export const docLink: string = 'empty';

export const document: LayDocument = { attributes, slots, docLink };

export default document;
