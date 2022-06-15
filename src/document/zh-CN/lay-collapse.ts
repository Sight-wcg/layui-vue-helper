import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'openKeys', description: '默认打开的折叠面板子项key', type: '`string`/`array`', default: '--', value: '' },
  { name: 'accordion', description: '是否开启手风琴效果', type: '`boolean`', default: '`false`', value: '' },
  { name: 'collapse-transition', description: '折叠动画', type: '`true` `false`', default: '`true`', value: '' },
];

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '折叠面板变化触发事件',
    parameter:
      '(`id`, `isShow`, activeValues)<br> <br> `id`: (`number` / `string`)对应当前操作面板的值 <br> <br> `isShow`: (`boolean`)`true` -> 展开, `false` -> 折叠 <br> <br> `activeValues`: (`Array`)当前状态为展开的面板值集合',
  },
];

export const document: LayDocument = { attributes, events };

export default document;
