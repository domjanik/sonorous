import { NgModule } from '@angular/core';
const publicComponents = [];
import { SonorousUiMaterialsModule } from './modules/sonorous-ui-materials.module';

@NgModule({
  declarations: [...publicComponents],
  imports: [
    SonorousUiMaterialsModule
  ],
  exports: [...publicComponents, SonorousUiMaterialsModule]
})
export class SonorousUiModule { }
