import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'space',
    description: '默认每个站多大比例（`%`）, 设置一个，<br/> 其他的都需要设置，合计为（`100` ）',
    type: 'number',
    default: '-',
    value: '按照个数平分',
  },
];

export const document: LayDocument = { attributes };

export default document;
