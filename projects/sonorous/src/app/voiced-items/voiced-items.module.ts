import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './voiced-items-routing.module';
import { SonorousUiModule } from "sonorous-ui";
import { VoicedItemsListComponent } from './voiced-items-list/voiced-items-list.component';
import { VoicedItemChooseComponent } from './voiced-item-choose/voiced-item-choose.component';

@NgModule({
  declarations: [VoicedItemsListComponent, VoicedItemChooseComponent],
  imports: [
    CommonModule,
    SonorousUiModule,
    RouterModule.forChild(routes),
  ]
})
export class VoicedItemsModule { }
