import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'title', description: '标题', type: '-', default: '-', value: '--' },
  { name: 'move', description: '允许拖拽', type: '-', default: '-', value: '`false`' },
  { name: 'maxmin', description: '最小化 最大化', type: '-', default: '-', value: '`false`' },
  { name: 'offset', description: '位置', type: '-', default: '-', value: '--' },
  { name: 'area', description: '尺寸', type: '-', default: '-', value: '--' },
  { name: 'v-model', description: '展示 隐藏', type: '-', default: '-', value: 'false' },
  { name: 'content', description: '内容', type: '-', default: '-', value: '--' },
  { name: 'shade', description: '开启遮盖', type: '-', default: '-', value: '--' },
  { name: 'shadeClose', description: '遮盖点击关闭', type: '-', default: '-', value: '--' },
  { name: 'shadeOpacity', description: '遮盖层透明度', type: '-', default: '-', value: '`0.1`' },
  { name: 'zIndex', description: '自定义层级', type: '-', default: '-', value: '--' },
  { name: 'type', description: '类型', type: '-', default: '-', value: '`1: component` `2: iframe`' },
  { name: 'closeBtn', description: '显示关闭', type: '-', default: '-', value: 'true' },
  { name: 'btn', description: '按钮 格式:{text:"",callback:function(){}}', type: '-', default: '-', value: '--' },
  { name: 'btnAlign', description: '按钮布局', type: '-', default: '-', value: '`l` `r` `c`' },
  { name: 'anim', description: '入场动画', type: '-', default: '-', value: '`0` `-` `6`' },
  { name: 'isOutAnim', description: '关闭动画', type: '-', default: '-', value: '`true` `false`' },
  { name: 'success', description: '显示回调', type: '-', default: '-', value: '--' },
  { name: 'close', description: '关闭回调', type: '-', default: '-', value: '--' },
];

export const document: LayDocument = { attributes };

export default document;
