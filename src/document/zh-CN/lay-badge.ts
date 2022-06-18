import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'type', description: '类型', type: 'string', default: '-', value: '`dot` `rim`' },
  {
    name: 'theme',
    description: '主题',
    type: 'string',
    default: '-',
    value: '`orange` `green` `cyan` `blue` `black` `gray`',
  },
];

export const slots: DocumentSlot[] = [{ name: 'default', description: '默认' }];

export const docLink: string = 'badge';

export const document: LayDocument = { attributes, slots, docLink };

export default document;
