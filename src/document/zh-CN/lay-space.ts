import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";
import { DocumentSlot } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"align","description":"对齐方式","type":"`string`","default":"`center`","value":"`start` `end` `center` `baseline`"},{"name":"direction","description":"间距方向","type":"`string`","default":"`horizontal`","value":"`horizontal` `vertical`"},{"name":"fill","description":"子元素是否填充父容器","type":"`boolean`","default":"`false`","value":"-"},{"name":"size","description":"间距大小`[row-gap, column-gap]` e.g. `8` `8px` `md` ['xs','md'] ['10px', '15px'] [10, 15]","type":"`string` `number` `[spaceSize,spaceSize]`","default":"`md`","value":"`lg` `md` `sm` `xs`"},{"name":"wrap","description":"是否自动折行","type":"`boolean`","default":"`false`","value":"`true` `false`"}];

export const slots: DocumentSlot[] = [{"name":"default","description":"默认插槽"}];

export const docLink: string = 'space';

export const document: LayDocument = {attributes,slots,docLink,};

export default document;
