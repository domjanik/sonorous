import {Pipe, PipeTransform} from '@angular/core';
import {I18nDictionaryService} from '../services/i18n-dictionary.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private dictionary: I18nDictionaryService) {
  }

  transform(value: any, args?: any): any {
    return this.dictionary.getForKey(value);
  }

}
