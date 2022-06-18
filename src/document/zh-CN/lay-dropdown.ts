import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'trigger', description: '触发方式', type: '-', default: '-', value: '`click` `hover` `contextMenu`' },
  { name: 'disabled', description: '是否禁用触发', type: '-', default: '-', value: '`true` `false`' },
];

export const events: DocumentEvent[] = [
  { name: 'hide', description: '隐藏下拉内容后触发', parameter: '--' },
  { name: 'open', description: '显示下拉内容后触发', parameter: '--' },
];

export const slots: DocumentSlot[] = [{ name: 'content', description: '下拉内容' }];

export const docLink: string = 'dropdown';

export const document: LayDocument = { attributes, events, slots, docLink };

export default document;
