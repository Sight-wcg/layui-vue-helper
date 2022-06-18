import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'v-model', description: '当前时间', type: '`string`', default: '--', value: '—' },
  {
    name: 'type',
    description: '选择类型',
    type: '`string`',
    default: '`date`',
    value: '`date` `datetime` `year` `month` `time` `yearmonth`',
  },
  { name: 'disabled', description: '是否禁止修改', type: '`boolean`', default: 'false', value: '—' },
  { name: 'simple', description: '一次性选择，无需点击确认按钮', type: '`boolean`', default: 'false', value: '—' },
];

export const docLink: string = 'datePicker';

export const document: LayDocument = { attributes, docLink };

export default document;
