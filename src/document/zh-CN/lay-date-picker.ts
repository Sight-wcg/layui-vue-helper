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
  { name: 'placeholder', description: '设置提示信息', type: '-', default: '-', value: '-' },
  { name: 'readonly', description: '只读', type: '`boolean`', default: 'false', value: '—' },
  { name: 'allowClear', description: '允许清空', type: '`boolean`', default: 'true', value: '—' },
  { name: 'size', description: '尺寸', type: '`string`', default: '`lg` `md` `sm` `xs`', value: '`md`' },
  { name: 'prefix-icon', description: '前置图标', type: '`string`', default: '`layui-icon-date`', value: '内置图标集' },
  { name: 'suffix-icon', description: '后置图标', type: '`string`', default: '--', value: '内置图标集' },
];

export const docLink: string = 'datePicker';

export const document: LayDocument = { attributes, docLink };

export default document;
