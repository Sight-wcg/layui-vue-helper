import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";
import { DocumentSlot } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"title","description":"标题","type":"string","default":"-","value":"-"},{"name":"content","description":"内容描述","type":"string","default":"-","value":"-"},{"name":"icon","description":"图标","type":"string","default":"-","value":"-"},{"name":"status","description":"状态","type":"string","default":"`primary`","value":"`primary` `success` `fail` `warning`"}];

export const slots: DocumentSlot[] = [{"name":"pace","description":"圆圈内容自定义"},{"name":"default","description":"内容区域自定义"}];

export const docLink: string = 'step';

export const document: LayDocument = {attributes,slots,docLink,};

export default document;
