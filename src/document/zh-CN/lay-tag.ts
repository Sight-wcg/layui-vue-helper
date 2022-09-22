import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";
import { DocumentEvent } from "../../shared/types";
import { DocumentSlot } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"type","description":"标签类型","type":"`string`","default":"-","value":"`primary` `normal` `warm` `danger`"},{"name":"size","description":"标签大小","type":"`string`","default":"`md`","value":"`lg` `md` `sm` `xs`"},{"name":"color","description":"自定义标签颜色","type":"`string`","default":"-","value":"-"},{"name":"bordered","description":"是否显示边框","type":"`boolean`","default":"`true`","value":"`true` `false`"},{"name":"closable","description":"是否可关闭","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"variant","description":"标签风格","type":"`string`","default":"`dark`","value":"`dark` `light` `plain`"},{"name":"disabled","description":"禁用标签","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"shape","description":"标签形状","type":"`string`","default":"`square`","value":"`square` `round`"},{"name":"maxWidth","description":"标签最大宽度","type":"`string`","default":"--","value":"--"}];

export const events: DocumentEvent[] = [{"name":"close","description":"点击关闭图标时触发","parameter":"(e: MouseEvent)"}];

export const slots: DocumentSlot[] = [{"name":"default","description":"默认插槽"},{"name":"icon","description":"图标"},{"name":"close-icon","description":"关闭图标"}];

export const docLink: string = 'tag';

export const document: LayDocument = {attributes,events,slots,docLink,};

export default document;
