import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './profile-routing.module';
import { RouterModule } from '@angular/router';
import * as EN from './i18n/en';
import * as PL from './i18n/pl';
import { I18nModule } from "sonorous-core";
import { ReactiveFormsModule } from "@angular/forms";
import { SonorousUiModule } from "sonorous-ui";
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    SonorousUiModule,
    ReactiveFormsModule,
    I18nModule.forRoot({
      keys: {
        en: EN.default,
        pl: PL.default
      }
    }),
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
