import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'active', description: '第几步', type: 'number', default: '-', value: '0' },
  { name: 'center', description: '居中布局', type: 'boolean', default: '`true` `false`', value: '`false`' },
  {
    name: 'direction',
    description: '垂直/平行布局',
    type: 'string',
    default: '`horizontal` `vertical`',
    value: '`horizontal`',
  },
  { name: 'space', description: '宽度', type: 'string', default: '-', value: '`auto`' },
  {
    name: 'currentStatus',
    description: '当前状态显示',
    type: 'string',
    default: '`primary` `success` `fail` `warning`',
    value: '`success`',
  },
  { name: 'composition', description: '排版', type: 'string', default: '`default` `row`', value: '`default`' },
  { name: 'simple', description: '简洁版', type: 'boolean', default: '`true` `false`', value: '`false`' },
  { name: 'onChange', description: '点击切换时监听', type: 'function', default: '-', value: 'function(index){}' },
];

export const docLink: string = 'step';

export const document: LayDocument = { attributes, docLink };

export default document;
