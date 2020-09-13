import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsListComponent } from './settings-list/settings-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './settings-routing.module';
import * as EN from './i18n/en';
import * as PL from './i18n/pl';
import { SonorousUiModule } from "sonorous-ui";
import { I18nModule } from "sonorous-core";

@NgModule({
  declarations: [SettingsListComponent],
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
export class SettingsModule { }
