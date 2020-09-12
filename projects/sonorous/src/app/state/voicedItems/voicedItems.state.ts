import {Action, Actions, State, StateContext, Store} from '@ngxs/store';
import {Injectable} from "@angular/core";
import {initValues, VoicedItemsStateInterface} from "./models/voiced-items-state";
import {VoicedItemsApiService} from "sonorous-api";
import {first} from "rxjs/operators";
import { TestAction } from './actions/form-actions';

@Injectable()
@State<VoicedItemsStateInterface>({
  name: 'month',
  defaults: {...initValues},
})
export class VoicedItemsState {
  constructor(public store: Store, public actions: Actions, public voicedItemsApiService: VoicedItemsApiService) {
  }

  @Action(TestAction)
  testAction(ctx: StateContext<VoicedItemsStateInterface>, action: TestAction) {
    this.voicedItemsApiService.exampleGet().pipe(first()).subscribe(() => {
      console.log('success');
    })
  }

}
