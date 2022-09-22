import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";
import { DocumentSlot } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"loading","description":"是否显示","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"rows","description":"显示行数","type":"`number`","default":"--","value":"--"},{"name":"animated","description":"是否动画","type":"`boolean`","default":"`true`","value":"`true` `false`"},{"name":"type","description":"展示类型","type":"`string`","default":"`p`","value":"`p` `image`"}];

export const slots: DocumentSlot[] = [{"name":"default","description":"默认插槽"},{"name":"skeleton","description":"自定义插槽"}];

export const docLink: string = 'skeleton';

export const document: LayDocument = {attributes,slots,docLink,};

export default document;
