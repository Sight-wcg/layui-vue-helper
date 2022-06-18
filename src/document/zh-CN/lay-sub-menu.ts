import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'title', description: '菜单标题', type: '-', default: '-', value: '--' },
];

export const slots: DocumentSlot[] = [
  { name: 'title', description: '菜单标题' },
  { name: 'expandIcon', description: '扩展图标' },
];

export const docLink: string = 'menu';

export const document: LayDocument = { attributes, slots, docLink };

export default document;
