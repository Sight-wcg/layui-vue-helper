import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";
import { DocumentSlot } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"title","description":"标题","type":"`string`","default":"-","value":"--"},{"name":"status","description":"状态","type":"`stirng`","default":"-","value":"`success` `failure`"},{"name":"describe","description":"描述信息","type":"`string`","default":"-","value":"--"}];

export const slots: DocumentSlot[] = [{"name":"content","description":"内容"},{"name":"extra","description":"扩展"}];

export const docLink: string = 'result';

export const document: LayDocument = {attributes,slots,docLink,};

export default document;
