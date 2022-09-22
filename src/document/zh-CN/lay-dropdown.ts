import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";
import { DocumentEvent } from "../../shared/types";
import { DocumentSlot } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"visible","description":"下拉面板是否可见","type":"`boolean`","default":"`true`","value":"`true` `false`"},{"name":"trigger","description":"触发方式,类型 `string` 或 trigger 数组","type":"`strine`","default":"`click`","value":"`click` `hover` `focus` `contextMenu`"},{"name":"disabled","description":"是否禁用触发","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"placement","description":"下拉面板位置","type":"`string`","default":"`bottom`","value":"`top` `bottom` `right` `left` `*-start` `*-end`"},{"name":"autoFitPosition","description":"是否自动调整下拉面板位置","type":"`boolean`","default":"`true`","value":"`true` `false`"},{"name":"autoFitWidth","description":"是否将下拉面板宽度设置为触发器宽度","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"autoFitMinWidth","description":"是否将下拉面板最小宽度设置为触发器宽度","type":"`boolean`","default":"`true`","value":"`true` `false`"},{"name":"updateAtScroll","description":"是否在容器滚动时更新下拉面板的位置","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"autoFixPosition","description":"是否在触发器或下拉面板尺寸变化时更新下拉面板位置","type":"`boolean`","default":"`true`","value":"`true` `false`"},{"name":"clickToClose","description":"是否在点击触发器时关闭面板","type":"`boolean`","default":"`true`","value":"`true` `false`"},{"name":"blurToClose","description":"是否在触发器失去焦点时关闭面板","type":"`boolean`","default":"`true`","value":"`true` `false`"},{"name":"clickOutsideToClose","description":"是否点击外部关闭下拉面板","type":"`boolean`","default":"`true`","value":"`true` `false`"},{"name":"contentOffset","description":"下拉面板距离触发器的偏移距离","type":"`string`","default":"`2px`","value":"-"},{"name":"mouseEnterDelay","description":"mouseEnter 事件延迟触发的时间, trigger hover 有效","type":"`number`","default":"`150`","value":"-"},{"name":"mouseLeaveDelay","description":"mouseLeave 事件延迟触发的时间, trigger hover 有效","type":"`number`","default":"`150`","value":"-"},{"name":"focusDelay","description":"focus 事件延迟触发的时间, trigger focus 有效","type":"`number`","default":"`150`","value":"-"},{"name":"alignPoint","description":"跟随鼠标","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"contentClass","description":"弹出内容的类名","type":"`string`","default":"-","value":"-"},{"name":"contentStyle","description":"弹出内容的样式","type":"`string`","default":"-","value":"-"}];

export const events: DocumentEvent[] = [{"name":"show","description":"隐藏下拉内容后触发","parameter":"--"},{"name":"open","description":"显示下拉内容后触发","parameter":"--"}];

export const slots: DocumentSlot[] = [{"name":"content","description":"下拉内容"}];

export const docLink: string = 'dropdown';

export const document: LayDocument = {attributes,events,slots,docLink,};

export default document;
