import { NgModule } from '@angular/core';
import { VoicedItemsApiService } from "./domain/voicedItems/voiced-items-api.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [HttpClientModule
  ],
  exports: [],
  providers: [VoicedItemsApiService]
})
export class SonorousApiModule { }
