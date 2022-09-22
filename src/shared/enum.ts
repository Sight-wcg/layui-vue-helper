export enum ExtensionLanguage {
  cn = 'zh-CN',
  en = 'en-US'
}

export enum ExtensionAttrNameCase {
  kebabCase = 'kebab-case',
  camelCase = 'camelCase'
}

export enum ExtensionTagNameCase {
  kebabCase = 'kebab-case',
  pascalCase = 'PascalCase'
}

export interface ExtensionConfiguration {
  language: ExtensionLanguage;
  completion: {
    preferredAttrNameCase: ExtensionAttrNameCase;
    preferredTagNameCase: ExtensionTagNameCase;
  };
}