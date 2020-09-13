import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './voiced-items-routing.module';
import { SonorousUiModule } from "sonorous-ui";
import { VoicedItemsListComponent } from './voiced-items-list/voiced-items-list.component';
import { VoicedItemChooseComponent } from './voiced-item-choose/voiced-item-choose.component';
import * as EN from './i18n/en';
import * as PL from './i18n/pl';
import { I18nModule } from "sonorous-core";
import { VoicedItemActiveMockComponent } from './voiced-item-choose/voiced-item-active-mock/voiced-item-active-mock.component';

@NgModule({
  declarations: [VoicedItemsListComponent, VoicedItemChooseComponent, VoicedItemActiveMockComponent],
  imports: [
    CommonModule,
    SonorousUiModule,
    I18nModule.forRoot({
        keys: {
            en: EN.default,
            pl: PL.default
        }
    }),
    RouterModule.forChild(routes),
  ]
})
export class VoicedItemsModule { }
