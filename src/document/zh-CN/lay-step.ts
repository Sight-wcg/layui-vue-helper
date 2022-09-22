import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"active","description":"第几步","type":"`number`","default":"0","value":"-"},{"name":"center","description":"居中布局","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"direction","description":"垂直/平行布局","type":"`string`","default":"`horizontal`","value":"`horizontal` `vertical`"},{"name":"space","description":"宽度","type":"`string`","default":"`auto`","value":"-"},{"name":"currentStatus","description":"当前状态显示","type":"`string`","default":"`success`","value":"`primary` `success` `fail` `warning`"},{"name":"composition","description":"排版","type":"`string`","default":"`default`","value":"`default` `row`"},{"name":"simple","description":"简洁版","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"onChange","description":"点击切换时监听","type":"`function`","default":"function(index){}","value":"-"}];

export const docLink: string = 'step';

export const document: LayDocument = {attributes,docLink,};

export default document;
