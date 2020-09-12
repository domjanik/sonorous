import {Injectable} from '@angular/core';
import {I18nDictionaryChunk} from '../model/i18n-dictionary-chunk';
import {deepMerge} from '../../utils/deep-merge';
import {findPath} from '../../utils/find-path';


@Injectable({
  providedIn: 'root'
})
export class I18nDictionaryService {

  langSelected = 'pl';

  dictionary: { [lang: string]: any };

  mergeChunk(chunk: I18nDictionaryChunk) {
    if (chunk.root) {
      this.dictionary = chunk.keys;
      if (chunk.debug) {
        console.log('I18nDictionaryService registers root translations');
        console.log(this.dictionary);
      }
    } else {
      this.dictionary = deepMerge(this.dictionary, chunk.keys);
      if (chunk.debug) {
        console.log('I18nDictionaryService registers feature translations');
        console.log(this.dictionary);
      }
    }

  }

  registerChunk(chunks: I18nDictionaryChunk[], root: true) {
    return new Promise<void>((res) => {
      chunks.forEach((chunk: I18nDictionaryChunk) => {
        this.mergeChunk({...chunk, root: true});
      });
      res();
    });
  }

  getForKey(key: string, forceLang?: string) {

    if (this.dictionary[forceLang || this.langSelected]) {

      const particleKey = key.split('.');
      if (particleKey.length) {
        return this.selectValue(forceLang || this.langSelected, particleKey) || key;
      }
    }
    return key;
  }

  selectValue(lang: string, particleKey: string[]) {
    return findPath(this.dictionary[lang], particleKey);
  }

}
