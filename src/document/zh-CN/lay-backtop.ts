import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'target', description: '可选，触发滚动事件的对象', type: 'string \\', default: 'Window', value: '`window`' },
  {
    name: 'showHeight',
    description: '可选，滚动高度达到该值后<br>显示回到顶部按钮',
    type: 'number',
    default: '`200`',
    value: '—',
  },
  {
    name: 'disabled',
    description: '可选，禁用点击返回顶部',
    type: 'boolean',
    default: '`false`',
    value: '`true` `false`',
  },
  {
    name: 'position',
    description: '可选，定位方式，特定容器内部<br>需设置为 absolute',
    type: 'string',
    default: '`fixed`',
    value: '`absolute` `fixed`',
  },
  { name: 'right', description: '可选，按钮距离页面右边距', type: 'number', default: '`30`', value: '—' },
  { name: 'size', description: '可选，按钮大小', type: 'string', default: '——', value: '`medium` `small`' },
  { name: 'bottom', description: '可选，按钮距离页面底部位置', type: 'number', default: '`40`', value: '`40`' },
  { name: 'bgcolor', description: '可选，背景颜色', type: 'string', default: '`#9F9F9F`', value: '—' },
  { name: 'opacity', description: '可选，不透明度', type: 'number', default: '`0.95`', value: '`0-1`' },
  { name: 'color', description: '可选，前景颜色', type: 'string', default: '`#FFFFFF`', value: '—' },
  { name: 'borderRadius', description: '可选，添加圆角', type: 'number \\', default: 'string', value: '`2`' },
  { name: 'circle', description: '可选，使用圆形按钮', type: 'boolean', default: '`false`', value: '`true`  `false`' },
  {
    name: 'icon',
    description: '可选，图标类型',
    type: 'string',
    default: '`layui-icon-top`',
    value: '`lay-icon`组件支持的所有类型',
  },
  { name: 'iconSize', description: '可选，图标大小', type: 'number', default: '`30`', value: '`30`' },
  { name: 'iconColor', description: '可选，图标颜色', type: 'string', default: '`#FFFFFF`', value: '—' },
];

export const events: DocumentEvent[] = [
  { name: 'click', description: '点击回到顶部按钮的回调函数', parameter: 'event' },
];

export const slots: DocumentSlot[] = [{ name: 'default', description: '自定义内容' }];

export const docLink: string = 'backtop';

export const document: LayDocument = { attributes, events, slots, docLink };

export default document;
