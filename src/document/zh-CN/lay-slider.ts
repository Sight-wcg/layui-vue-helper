import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'v-model', description: '选中值', type: '`Number`', default: '-', value: '-' },
  { name: 'vertical', description: '是否垂直', type: '`Boolean`', default: '-', value: '-' },
  { name: 'range', description: '是否区间', type: '`Boolean`', default: '-', value: '-' },
  { name: 'rangeValue', description: '区间值', type: '`Array`', default: '-', value: '-' },
  { name: 'step', description: '步长', type: '`Number`', default: '-', value: '-' },
  { name: 'min', description: '最小值', type: '`Number`', default: '-', value: '-' },
  { name: 'max', description: '最大值', type: '`Number`', default: '-', value: '-' },
  { name: 'showDots', description: '是否显示断点', type: '`Boolean`', default: '-', value: 'false' },
];

export const document: LayDocument = { attributes };

export default document;
