import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'placeholder', description: '提示信息', type: '-', default: '-', value: '' },
  { name: 'v-model', description: '值', type: '-', default: '-', value: '' },
  { name: 'decollator', description: '分割符号，默认为 `/`', type: '-', default: '-', value: '' },
  { name: 'options', description: '选项参数 格式请见上面的demo', type: '-', default: '-', value: '' },
  {
    name: 'onlyLastLevel',
    description: '回显displayValue仅显示最后一级，默认为 `false`',
    type: '-',
    default: '-',
    value: '',
  },
];

export const events: DocumentEvent[] = [{ name: 'change', description: '选中后数据改变的回调', parameter: '' }];

export const docLink: string = 'cascader';

export const document: LayDocument = { attributes, events, docLink };

export default document;
