import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"content","description":"显示内容","type":"`string`","default":"-","value":"-"},{"name":"position","description":"显示位置","type":"`string`","default":"`top`","value":"`top` `bottom` `left` `right`"},{"name":"isDark","description":"是否为黑色主题","type":"`boolean`","default":"`true`","value":"`true` `false`"},{"name":"disabled","description":"是否禁用","type":"`boolean`","default":"`false`","value":"`false` `true`"},{"name":"isCanHide","description":"控制是否可以隐藏,可参考`lay-slider`组件","type":"`boolean`","default":"`true`","value":"`false` `true`"},{"name":"isAutoShow","description":"控制超出文本 `...` 时自动展示， 没有 `...` 时不展示","type":"`boolean`","default":"`false`","value":"`false` `true`"},{"name":"visible","description":"控制显示,隐藏","type":"`boolean`","default":"`false`","value":"`true` `false`"}];

export const docLink: string = 'tooltip';

export const document: LayDocument = {attributes,docLink,};

export default document;
