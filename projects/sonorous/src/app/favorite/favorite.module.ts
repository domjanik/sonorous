import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './favorite-routing.module';
import * as EN from './i18n/en';
import * as PL from './i18n/pl';
import { I18nModule } from "sonorous-core";
import { SonorousUiModule } from "sonorous-ui";

@NgModule({
  declarations: [FavoriteListComponent],
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
export class FavoriteModule { }
