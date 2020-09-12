import {Injectable} from '@angular/core';
import {I18nDictionaryService} from './i18n-dictionary.service';
import {I18nDictionaryChunk} from '../model/i18n-dictionary-chunk';

@Injectable()
export class I18nService {

  constructor(dictionary: I18nDictionaryService, featureChunk: I18nDictionaryChunk) {
    if (featureChunk.debug) {
      console.log('I18nService retrieves translations chunk');
      console.log(featureChunk);
    }
    if (featureChunk && !featureChunk.root) {
      dictionary.mergeChunk(featureChunk);
    }

  }
}
