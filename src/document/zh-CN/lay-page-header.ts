import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";
import { DocumentEvent } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"content","description":"标题,当前默认插槽不为空时失效","type":"`string`","default":"--","value":"--"},{"name":"backText","description":"返回文本","type":"`string`","default":"\"返回\"","value":"--"}];

export const events: DocumentEvent[] = [{"name":"back","description":"点击返回回调","parameter":"-"}];

export const docLink: string = 'pageHeader';

export const document: LayDocument = {attributes,events,docLink,};

export default document;
