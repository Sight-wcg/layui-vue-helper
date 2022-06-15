import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'title', description: '标题', type: 'string', default: '-', value: '-' },
  { name: 'content', description: '内容描述', type: 'string', default: '-', value: '-' },
  { name: 'icon', description: '图标', type: 'string', default: '-', value: '-' },
  {
    name: 'status',
    description: '状态',
    type: 'string',
    default: '`primary` `success` `fail` `warning`',
    value: '`primary`',
  },
];

export const slots: DocumentSlot[] = [
  { name: 'pace', description: '圆圈内容自定义' },
  { name: 'default', description: '内容区域自定义' },
];

export const document: LayDocument = { attributes, slots };

export default document;
