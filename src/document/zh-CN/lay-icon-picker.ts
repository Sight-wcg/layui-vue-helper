import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'v-model', description: '默认值', type: '-', default: '-', value: '--' },
  { name: 'page', description: '开启分页', type: '-', default: '-', value: '--' },
  { name: 'showSearch', description: '启用搜索', type: '-', default: '-', value: '--' },
];

export const docLink: string = 'iconPicker';

export const document: LayDocument = { attributes, docLink };

export default document;
