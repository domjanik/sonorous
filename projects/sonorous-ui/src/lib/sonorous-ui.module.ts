import { NgModule, APP_INITIALIZER, ModuleWithProviders } from '@angular/core';
import { SonorousUiMaterialsModule } from './modules/sonorous-ui-materials.module';
import { ListButtonComponent } from './components/list-button/list-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './components/test/test.component';
import { SonorousIconsService } from './services/sonorous-icons.service';

export function icons_initialization_factory(is: SonorousIconsService) {
  return (): Promise<any> => {
    return is.refisterIcons();
  };
}
const publicComponents = [ListButtonComponent, TestComponent];

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
export class SonorousUiModule {
  static forRoot(): ModuleWithProviders<SonorousUiModule> {
    return {
      ngModule: SonorousUiModule,
      providers: [SonorousIconsService,
        { provide: APP_INITIALIZER, useFactory: icons_initialization_factory, deps: [SonorousIconsService], multi: true }]
    };
  }
}
