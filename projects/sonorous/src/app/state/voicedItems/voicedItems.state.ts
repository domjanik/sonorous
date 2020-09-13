import { Action, Actions, State, StateContext, Store } from '@ngxs/store';
import { Injectable } from "@angular/core";
import { initValues, VoicedItemsStateInterface } from "./models/voiced-items-state";
import { VoicedItemsApiService } from "sonorous-api";
import { first } from "rxjs/operators";
import { GetItemsAction, SetItemsLoadingAction, GetCategoriesAction } from './actions/list-actions';
import { VoicedItemModel } from './models/voicedItemModel';

@Injectable()
@State<VoicedItemsStateInterface>({
  name: 'voicedItems',
  defaults: { ...initValues },
})
export class VoicedItemsState {
  constructor(public store: Store, public actions: Actions, public voicedItemsApiService: VoicedItemsApiService) {
  }

  @Action(SetItemsLoadingAction)
  setItemsLoadingAction(ctx: StateContext<VoicedItemsStateInterface>, action: SetItemsLoadingAction) {
    ctx.patchState({ isLoading: action.value })
  }

  @Action(GetItemsAction)
  getItems(ctx: StateContext<VoicedItemsStateInterface>, action: GetItemsAction) {
    ctx.dispatch(new SetItemsLoadingAction(true));
    this.voicedItemsApiService.getItems(action.id).pipe(first()).subscribe((data: VoicedItemModel[]) => {
      ctx.patchState({
        voicedItems: [...data]
      })
      ctx.dispatch(new SetItemsLoadingAction(false));
    }, () => {
      ctx.dispatch(new SetItemsLoadingAction(false));
    })
  }
  
  @Action(GetCategoriesAction)
  getCategories(ctx: StateContext<VoicedItemsStateInterface>, action: GetCategoriesAction) {
    ctx.dispatch(new SetItemsLoadingAction(true));
    this.voicedItemsApiService.getCategories().pipe(first()).subscribe((data: VoicedItemModel[]) => {
      ctx.patchState({
        voicedItems: [...data]
      })
      ctx.dispatch(new SetItemsLoadingAction(false));
    }, () => {
      ctx.dispatch(new SetItemsLoadingAction(false));
    })
  }
}
