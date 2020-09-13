import { NgModule } from '@angular/core';
import { VoicedItemsApiService } from "./domain/voicedItems/voiced-items-api.service";
import { ProfileApiService } from "./domain/profile/profile-api.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [HttpClientModule
  ],
  exports: [],
  providers: [VoicedItemsApiService, ProfileApiService]
})
export class SonorousApiModule { }
