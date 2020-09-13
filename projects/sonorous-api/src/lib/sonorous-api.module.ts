import { NgModule } from '@angular/core';
import { VoicedItemsApiService } from "./domain/voicedItems/voiced-items-api.service";
import { ProfileApiService } from "./domain/profile/profile-api.service";
import { HttpClientModule } from '@angular/common/http';
import { FavoriteApiService } from './domain/favorite';

@NgModule({
  declarations: [],
  imports: [HttpClientModule
  ],
  exports: [],
  providers: [VoicedItemsApiService, FavoriteApiService, ProfileApiService]
})
export class SonorousApiModule { }
