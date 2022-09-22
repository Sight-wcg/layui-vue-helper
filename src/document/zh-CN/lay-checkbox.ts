import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";
import { DocumentEvent } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"name","description":"原始属性 name","type":"`string`","default":"-","value":"--"},{"name":"skin","description":"主题","type":"`string`","default":"-","value":"-"},{"name":"label","description":"当前显示的值","type":"`string`","default":"-","value":"-"},{"name":"v-model","description":"是否选中","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"is-indeterminate","description":"半选","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"size","description":"尺寸","type":"`string`","default":"`md`","value":"`lg` `md` `sm` `xs`"}];

export const events: DocumentEvent[] = [{"name":"change","description":"切换事件","parameter":"isChecked : 当前状态"}];

export const docLink: string = 'checkbox';

export const document: LayDocument = {attributes,events,docLink,};

export default document;
