import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [{ name: '-', description: '-', type: '-', default: '-', value: '' }];

export const slots: DocumentSlot[] = [{ name: 'default', description: '默认内容' }];

export const document: LayDocument = { attributes, slots };

export default document;
