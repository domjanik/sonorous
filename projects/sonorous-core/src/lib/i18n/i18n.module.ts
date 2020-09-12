import {APP_INITIALIZER, ModuleWithProviders, NgModule, Optional} from '@angular/core';
import {TranslatePipe} from './pipes/translate.pipe';
import {I18nDictionaryChunk} from './model/i18n-dictionary-chunk';
import {I18nDictionaryService} from './services/i18n-dictionary.service';

export function dictionary_factory(di: I18nDictionaryService, chunks: I18nDictionaryChunk[]) {
  return (): Promise<any> => {
    return di.registerChunk(chunks, true);
  };
}

// @dynamic
@NgModule({
  declarations: [TranslatePipe],
  exports: [TranslatePipe]
})
export class I18nModule {

  constructor(@Optional() globalService: I18nDictionaryService, @Optional() chunk: I18nDictionaryChunk) {
    const ch: any = chunk[0] ? chunk[0] : chunk;
    if (ch && !ch.root) {
      globalService.mergeChunk(ch);
    }
  }

  static forRoot(translationsChunk: I18nDictionaryChunk): ModuleWithProviders<I18nModule> {
    return {
      ngModule: I18nModule,
      providers: [I18nDictionaryService,
        {provide: I18nDictionaryChunk, useValue: translationsChunk, multi: true},
        {
          provide: APP_INITIALIZER, useFactory: dictionary_factory, multi: true,
          deps: [I18nDictionaryService, I18nDictionaryChunk]
        }]
    };
  }

  static forFeature(translationsChunk: I18nDictionaryChunk): ModuleWithProviders<I18nModule> {

    return {
      ngModule: I18nModule,
      providers: [{provide: I18nDictionaryChunk, useValue: translationsChunk}]
    };
  }
}
