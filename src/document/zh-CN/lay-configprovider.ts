import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'locale', description: '地区', type: '`string`', default: '`zh_CN`', value: '`zh_CN` `en_US`' },
  { name: 'locales', description: '地区语言包', type: '`object`', default: '-', value: '-' },
  { name: 'theme', description: '主题模式', type: '`string`', default: '`light`', value: '`light` `dark`' },
  { name: 'themeVariable', description: '主题变量', type: '`object`', default: '-', value: '-' },
  { name: 'darkPartial', description: '调整夜间模式表现', type: '`object`', default: '-', value: '-' },
];

export const slots: DocumentSlot[] = [{ name: 'default', description: '默认插槽' }];

export const docLink: string = 'configProvider';

export const document: LayDocument = { attributes, slots, docLink };

export default document;
