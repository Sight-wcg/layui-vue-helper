import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"direction","description":"排列方向","type":"`string`","default":"`horizontal`","value":"`horizontal` `vertical`"}];

export const docLink: string = 'timeline';

export const document: LayDocument = {attributes,docLink,};

export default document;
