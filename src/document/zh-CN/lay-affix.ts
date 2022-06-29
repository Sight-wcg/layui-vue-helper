import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'position', description: '定位属性 : string', type: '-', default: '-', value: '`top` `bottom`' },
  { name: 'offset', description: '偏移量 : number,默认为0', type: '-', default: '-', value: '-' },
  {
    name: 'target',
    description: '指定参考容器 : HTMLElement',
    type: '-',
    default: '-',
    value: '默认`document.body`,请务必确保能够正确获取到dom',
  },
];

export const events: DocumentEvent[] = [
  {
    name: 'scroll',
    description:
      '初始化完成与滚动时触发的回调，回调会返回一个object`{targetScroll:string,affixed:boolean,offset:number}`',
    parameter: '`targetScroll` 容器滚动距离`affixed` 是否处于fixed状态`offset` 与原本位置的距离',
  },
];

export const docLink: string = 'affix';

export const document: LayDocument = { attributes, events, docLink };

export default document;
