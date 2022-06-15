import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'type', description: '波纹类型', type: '-', default: '-', value: '`out` `inset`' },
  { name: 'color', description: '波纹颜色', type: '-', default: '-', value: '--' },
  { name: 'borderRadius', description: '圆角，仅 `out` 类型', type: '-', default: '-', value: '--' },
  { name: 'spreadWidth', description: '扩散宽度，单位 px，仅 `out` 类型', type: '-', default: '-', value: '--' },
  { name: 'spreadSize', description: '扩散大小，单位 px，仅 `inset` 类型', type: '-', default: '-', value: '--' },
  { name: 'trigger', description: '触发方式', type: '-', default: '-', value: '`click` `always` `mouseenter`' },
  { name: 'center', description: '是否在元素中心扩散', type: '-', default: '-', value: '--' },
];

export const slots: DocumentSlot[] = [{ name: 'default', description: '默认插槽' }];

export const document: LayDocument = { attributes, slots };

export default document;
