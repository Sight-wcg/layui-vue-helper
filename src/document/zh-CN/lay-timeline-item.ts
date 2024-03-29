import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";
import { DocumentSlot } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"simple","description":"简单模式","type":"-","default":"-","value":"--"},{"name":"title","description":"标题","type":"-","default":"-","value":"--"}];

export const slots: DocumentSlot[] = [{"name":"title","description":"标题插槽"},{"name":"dot","description":"节点"}];

export const docLink: string = 'timeline';

export const document: LayDocument = {attributes,slots,docLink,};

export default document;
