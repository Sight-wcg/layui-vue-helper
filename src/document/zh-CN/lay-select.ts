import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";
import { DocumentEvent } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"v-model","description":"选中值","type":"`string` `number` `Array`","default":"-","value":"-"},{"name":"name","description":"原生 name 属性","type":"`string`","default":"-","value":"-"},{"name":"placeholder","description":"默认空提示语","type":"`string`","default":"`请选择`","value":"-"},{"name":"disabled","description":"是否禁用","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"showEmpty","description":"是否增加空提示选项","type":"`boolean`","default":"`true`","value":"`true` `false`"},{"name":"multiple","description":"是否为多选","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"create","description":"是否允许创建(已移除,1.5.0)","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"searchPlaceholder","description":"搜索框占位","type":"`string`","default":"-","value":"-"},{"name":"minCollapsedNum","description":"标签最小折叠数","type":"`number`","default":"0","value":"-"},{"name":"collapseTagsTooltip","description":"是否悬浮显示已折叠图标","type":"`boolean`","default":"`false`","value":"`true` `false`"}];

export const events: DocumentEvent[] = [{"name":"change","description":"切换事件","parameter":"value"},{"name":"search","description":"关键词变化事件","parameter":"用户输入的关键词 string"},{"name":"create","description":"允许创建情况下的创建回调事件(已移除,1.5.0)","parameter":"用户输入的关键词 string"}];

export const docLink: string = 'select';

export const document: LayDocument = {attributes,events,docLink,};

export default document;
