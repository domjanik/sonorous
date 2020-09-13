import { Action, Actions, State, StateContext, Store } from '@ngxs/store';
import { Injectable } from "@angular/core";
import { initValues, FavoriteStateInterface } from "./models/favorite-state";
import { FavoriteApiService } from "sonorous-api";
import { first } from "rxjs/operators";
import { SetItemsLoadingAction, GetFavoriteItemsAction, AddFavoriteItemAction, RemoveFavoriteItemAction } from './actions/list-actions';
import { FavoriteModel } from './models/favoriteModel';
import { LoadVoicedItemAction } from '../voicedItems/actions/list-actions';

@Injectable()
@State<FavoriteStateInterface>({
  name: 'favorite',
  defaults: { ...initValues },
})
export class FavoriteState {
  constructor(public store: Store, public actions: Actions, public favoriteApiService: FavoriteApiService) {
  }

  @Action(SetItemsLoadingAction)
  setItemsLoadingAction(ctx: StateContext<FavoriteStateInterface>, action: SetItemsLoadingAction) {
    ctx.patchState({ isLoading: action.value })
  }

  @Action(GetFavoriteItemsAction)
  getFavorite(ctx: StateContext<FavoriteStateInterface>, action: GetFavoriteItemsAction) {
    ctx.dispatch(new SetItemsLoadingAction(true));
    this.favoriteApiService.getFavorite().pipe(first()).subscribe((data: FavoriteModel[]) => {
      ctx.patchState({
        favoriteItems: [...data]
      })
      ctx.dispatch(new SetItemsLoadingAction(false));
    }, () => {
      ctx.dispatch(new SetItemsLoadingAction(false));
    })
  }

  @Action(RemoveFavoriteItemAction)
  removeFavorite(ctx: StateContext<FavoriteStateInterface>, action: RemoveFavoriteItemAction) {
    this.favoriteApiService.removeFavorite(action.id).pipe(first()).subscribe(() => {
      ctx.dispatch(new LoadVoicedItemAction(action.id))
    })
  }

  @Action(AddFavoriteItemAction)
  addFavorite(ctx: StateContext<FavoriteStateInterface>, action: AddFavoriteItemAction) {
    this.favoriteApiService.postFavorite({
      categoryid: action.id,
      categoryName: action.name,
      fields: action.fields
    }).pipe(first()).subscribe((data: FavoriteModel[]) => {
      ctx.dispatch(new LoadVoicedItemAction(action.id))

    })
  }
}
