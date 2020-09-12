import { NgModule } from '@angular/core';
import { SonorousUiMaterialsModule } from './modules/sonorous-ui-materials.module';
import { ListButtonComponent } from './components/list-button/list-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const publicComponents = [ListButtonComponent];

@NgModule({
  declarations: [...publicComponents],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SonorousUiMaterialsModule
  ],
  exports: [...publicComponents, SonorousUiMaterialsModule]
})
export class SonorousUiModule { }
