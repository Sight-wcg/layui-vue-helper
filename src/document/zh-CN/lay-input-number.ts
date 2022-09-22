import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";
import { DocumentEvent } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"v-model","description":"值","type":"`number`","default":"0","value":"-"},{"name":"name","description":"原生属性`name`","type":"`number`","default":"5","value":"-"},{"name":"disabledInput","description":"禁用输入框输入","type":"`boolean`","default":"false","value":"-"},{"name":"disabled","description":"禁用操作","type":"`boolean`","default":"false","value":"-"},{"name":"step","description":"数字增减的步数","type":"`number`","default":"1","value":"-"},{"name":"position","description":"控制按钮显示位置, 目前除了默认值，只有`right`可填","type":"`string`","default":"--","value":"-"},{"name":"min","description":"最小可输入的数","type":"`number`","default":"--","value":"-"},{"name":"max","description":"最大可输入的数","type":"`number`","default":"--","value":"-"},{"name":"size","description":"尺寸","type":"`string`","default":"默认 md","value":"`lg` `md` `sm` `xs`"}];

export const events: DocumentEvent[] = [{"name":"change","description":"值更改触发事件","parameter":"(value: number)"}];

export const docLink: string = 'inputNumber';

export const document: LayDocument = {attributes,events,docLink,};

export default document;
