export abstract class I18nDictionaryChunk {
  path?: string;
  keys: { [lang: string]: any };
  root?: boolean;
  debug?: boolean;
}
