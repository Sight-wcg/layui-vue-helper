import { LayDocument } from "../../shared/types";
import { DocumentAttribute } from "../../shared/types";
import { DocumentMethod } from "../../shared/types";
import { DocumentEvent } from "../../shared/types";
import { DocumentSlot } from "../../shared/types";

export const attributes: DocumentAttribute[] = [{"name":"modelValue","description":"绑定值","type":"`string[]` `number[]` `TagData[]`","default":"-","value":"-"},{"name":"size","description":"输入框大小","type":"`string`","default":"`md`","value":"`lg` `md` `sm` `xs`"},{"name":"inputValue","description":"输入框的值","type":"`string`","default":"-","value":"-"},{"name":"placeholder","description":"占位符","type":"`string`","default":"-","value":"-"},{"name":"readonly","description":"是否可只读","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"allowClear","description":"允许清空","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"disabled","description":"是否禁用","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"max","description":"最大输入标签数量","type":"`number`","default":"-","value":"-"},{"name":"minCollapsedNum","description":"最小折叠数量","type":"`number`","default":"-","value":"-"},{"name":"collapseTagsTooltip","description":"是否悬浮显示折叠标签","type":"`boolean`","default":"`false`","value":"`true` `false`"},{"name":"tagProps","description":"tag 属性","type":"`LayTagProps`","default":"-","value":"-"}];

export const methods: DocumentMethod[] = [{"name":"focus","description":"获取焦点","parameter":"-"},{"name":"blur","description":"失去焦点","parameter":"-"}];

export const events: DocumentEvent[] = [{"name":"change","description":"值改变时触发","parameter":"(value: (string &#124; number &#124; TagData)[])"},{"name":"inputValueChange","description":"输入框值改变时触发","parameter":"(inputValue: string)"},{"name":"remove","description":"删除标签时触发","parameter":"(value: string &#124; number, e: Event)"},{"name":"clear","description":"点击清除按钮时触发","parameter":"(e: Event)"},{"name":"focus","description":"获得焦点时触发","parameter":"(e: Event)"},{"name":"blur","description":"失去焦点时触发","parameter":"(e: Event)"},{"name":"pressEnter","description":"按下 Enter 键时触发","parameter":"(inputValue: string, e: Event)"}];

export const slots: DocumentSlot[] = [{"name":"prefix","description":"前置插槽"},{"name":"suffix","description":"后置插槽"}];

export const docLink: string = 'tagInput';

export const document: LayDocument = {attributes,methods,events,slots,docLink,};

export default document;
