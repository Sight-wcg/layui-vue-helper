import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"enter","description":"进入全屏","type":"Function","default":"可选,`HTMLElement`","value":""},{"name":"exit","description":"退出全屏","type":"Function","default":"可选,`HTMLElement` `Document`","value":""},{"name":"toggle","description":"进入/退出全屏","type":"Function","default":"-","value":""},{"name":"isFullscreen","description":"是否全屏","type":"boolean","default":"-","value":""}];

export const docLink: string = 'fullscreen';

export const document: LayDocument = {attributes,docLink,};

export default document;
