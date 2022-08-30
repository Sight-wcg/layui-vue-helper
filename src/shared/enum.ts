export enum ExtensionLanguage {
  cn = 'zh-CN',
  en = 'en-US'
}

export enum ExtensionAttrCase {
  kebabCase = 'kebab-case',
  camelCase = 'camelCase'
}

export interface ExtensionConfigutation {
  language: ExtensionLanguage;
  attrCase: ExtensionAttrCase;
}