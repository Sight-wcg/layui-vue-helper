import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  {
    name: 'type',
    description: '弹层类型, `0:dialog` `1:page` `2:iframe` `3:loading` `4:drawer` `5:photos` `6:notifiy`',
    type: '`string`',
    default: '`1`',
    value: '`0` `1` `2` `3` `4` `5`',
  },
  { name: 'title', description: '标题', type: '`string` `boolean`', default: '`信息`', value: '--' },
  { name: 'content', description: '内容', type: '`string` `HtmlFragment` `vnode`', default: '--', value: '--' },
  { name: 'v-model', description: '显示', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  {
    name: 'offset',
    description: '位置 `[top,left]`',
    type: '`string` `[string,string]`',
    default: "`['50%','50%']`",
    value: '`auto` `t` `r` `b` `l` `lt` `lb` `rt` `rb`',
  },
  {
    name: 'area',
    description: '尺寸,e.g. `auto` `200px` `[width,height]`',
    type: '`string` `[string,strring]`',
    default: '`auto`',
    value: '--',
  },
  { name: 'move', description: '是否允许拖拽', type: '`boolean`', default: '`true`', value: '`true` `false`' },
  { name: 'maxmin', description: '是否允许缩放', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  { name: 'resize', description: '是否允许拉伸', type: '`boolean`', default: '`false`', value: '`true` `false`' },
  {
    name: 'anim',
    description:
      '入场动画,`0 平滑放大`, `1 从上掉落`, `2 从最底部往上滑入`,`3 从左滑入`, `4 从左翻滚`, `5 渐显`, `6 抖动`',
    type: '`number`',
    default: '`0`',
    value: '`0` `1` `2` `3` `4` `5` `6`',
  },
  { name: 'isOutAnim', description: '关闭动画', type: '`boolean`', default: '`true`', value: '`true` `false`' },
  { name: 'btnAlign', description: '按钮位置', type: '`string`', default: '`r`', value: '`l` `c` `r`' },
  { name: 'closeBtn', description: '关闭按钮', type: '`boolean` `string`', default: '`1`', value: '`false` `1` `2`' },
  { name: 'time', description: '关闭时间', type: '`number`', default: '`0`', value: '--' },
  { name: 'shade', description: '是否显示遮罩', type: '`boolean`', default: '`true`', value: '`true` `false`' },
  {
    name: 'shadeClose',
    description: '点击遮罩是否关闭',
    type: '`boolean`',
    default: '`true`',
    value: '`true` `false`',
  },
  { name: 'shadeOpacity', description: '遮罩透明度', type: '`string`', default: '`0.1`', value: '`0.1` - `1`' },
  {
    name: 'isHtmlFragment',
    description: '是否解析 HTML 片段',
    type: '`boolean`',
    default: '`false`',
    value: '`true` `false`',
  },
  {
    name: 'imgList',
    description: '图片数据数组',
    type: "`array[{src:图片链接,alt:图片名字可选',thumb:'缩略图可选'}]",
    default: '-',
    value: '-',
  },
  { name: 'startIndex', description: '图片初始浏览索引', type: '`number`', default: '0', value: '-' },
  { name: 'full', description: '最大化回调', type: '`function`', default: '-', value: '-' },
  { name: 'min', description: '最小化回调', type: '`function`', default: '-', value: '-' },
  { name: 'restore', description: '重置回调', type: '`function`', default: '-', value: '-' },
  { name: 'success', description: '打开回调', type: '`function`', default: '-', value: '-' },
  { name: 'end', description: '关闭回调', type: '`function`', default: '-', value: '-' },
];

export const slots: DocumentSlot[] = [{ name: 'default', description: '默认插槽' }];

export const docLink: string = 'layer';

export const document: LayDocument = { attributes, slots, docLink };

export default document;
