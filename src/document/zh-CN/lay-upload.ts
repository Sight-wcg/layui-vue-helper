import { LayDocument } from '../../shared/types';
import { DocumentAttribute } from '../../shared/types';
import { DocumentEvent } from '../../shared/types';
import { DocumentSlot } from '../../shared/types';

export const attributes: DocumentAttribute[] = [
  { name: 'url', description: '服务端上传接口的地址', type: 'string', default: '--', value: '--' },
  { name: 'data', description: '请求上传接口的额外参数', type: 'object', default: '--', value: '--' },
  { name: 'headers', description: '接口的请求头', type: 'object', default: '--', value: '--' },
  {
    name: 'acceptMime',
    description: '文件选择框时的可选文件类型',
    type: 'string',
    default: '`images`',
    value: '`images`',
  },
  { name: 'field', description: '设定文件域的字段名', type: 'string', default: '`file`', value: '--' },
  {
    name: 'size',
    description: '设置文件最大可允许上传的大小，单位 KB。不支持ie8/9',
    type: 'number',
    default: '`0(不限制)`',
    value: '--',
  },
  {
    name: 'multiple',
    description: '是否允许多文件上传。设置 true即可开启。不支持ie8/9',
    type: 'boolean',
    default: 'false',
    value: '--',
  },
  {
    name: 'number',
    description: '设置同时可上传的文件数量，一般配合 multiple 参数出现。',
    type: 'number',
    default: '`0(不限制)`',
    value: '--',
  },
  {
    name: 'drag',
    description: '是否接受拖拽的文件上传，设置 false 可禁用。不支持ie8/9',
    type: 'boolean',
    default: 'true',
    value: '--',
  },
  { name: 'disabled', description: '设置文件禁用', type: 'boolean', default: 'false', value: '--' },
  {
    name: 'disabledPreview',
    description: '设置文件预览插槽区域为禁用状态',
    type: 'boolean',
    default: 'false',
    value: '--',
  },
  { name: 'cut', description: '是否开启选择图片后检测,设置true可开启', type: 'boolean', default: 'false', value: '--' },
  {
    name: 'cutOptions',
    description: '开启剪裁的模态弹窗与剪裁框的配置',
    type: 'object',
    default: '{ layerOption,copperOption }',
    value: '--',
  },
];

export const events: DocumentEvent[] = [
  { name: 'choose', description: '打开系统选择文件窗体的回调', parameter: '--' },
  { name: 'before', description: '上传事务开启前的回调', parameter: '--' },
  { name: 'done', description: '上传事务结束的回调', parameter: '--' },
  { name: 'error', description: '上传事务中出现错误的回调', parameter: '--' },
  { name: 'cutdown', description: '剪裁完成', parameter: '--' },
  { name: 'cutclose', description: '剪裁取消', parameter: '--' },
];

export const slots: DocumentSlot[] = [{ name: 'preview', description: '自定义预览效果' }];

export const document: LayDocument = { attributes, events, slots };

export default document;
