import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'app', component: LayoutComponent,
    children: [
      {
        path: 'voiceditems', loadChildren: () => import('src/app/voiced-items/voiced-items.module').then(m => m.VoicedItemsModule)
      },
      // { path: 'voiceditems', loadChildren: './voiced-items/voiced-items.module#VoicedItemsModule' },
      {
        path: 'profile', loadChildren: () => import('src/app/profile/profile.module').then(m => m.ProfileModule)
      }]
  },
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: '**', redirectTo: '/app', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
