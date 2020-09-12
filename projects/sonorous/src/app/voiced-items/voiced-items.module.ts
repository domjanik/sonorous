import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './voiced-items-routing.module';
import { SonorousUiModule } from "sonorous-ui";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SonorousUiModule,
    RouterModule.forChild(routes),
  ]
})
export class VoicedItemsModule { }
