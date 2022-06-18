import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'label', description: '标签值(`必填`)', type: '`string`', default: '-', value: '-' },
  { name: 'value', description: '值', type: '`string` / `number`', default: '-', value: '-' },
  {
    name: 'keyword',
    description: '用于匹配关键词的数据，传入文本+拼音可以支持拼音搜索',
    type: '`string`',
    default: '-',
    value: '-',
  },
  { name: 'disabled', description: '是否禁用', type: '`boolean`', default: '`true` `false`', value: '`false`' },
];

export const slots: DocumentSlot[] = [{ name: 'default', description: '默认(`label`)' }];

export const docLink: string = 'select';

export const document: LayDocument = { attributes, slots, docLink };

export default document;
