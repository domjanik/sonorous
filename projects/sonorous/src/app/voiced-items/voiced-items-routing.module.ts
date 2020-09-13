import { Routes } from "@angular/router";
import { VoicedItemsListComponent } from './voiced-items-list/voiced-items-list.component';
import { VoicedItemChooseComponent } from './voiced-item-choose/voiced-item-choose.component';

export const routes: Routes = [
  {
    path: '', component: VoicedItemsListComponent
  },
  {
    path: 'choose/:id', component: VoicedItemChooseComponent
  }
];
