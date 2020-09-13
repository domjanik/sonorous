import { Action, Actions, State, StateContext, Store } from '@ngxs/store';
import { Injectable } from "@angular/core";
import { initValues, VoicedItemsStateInterface } from "./models/voiced-items-state";
import { VoicedItemsApiService } from "sonorous-api";
import { first } from "rxjs/operators";
import { GetItemsAction, SetItemsLoadingAction, GetCategoriesAction, ResetVoicedItemsList, SelectItemAction, SelectPreviousItemAction, ResetItemSelectionAction, GetItemImageAction, SetSelectionAction, SetSelectionFormValuesAction } from './actions/list-actions';
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

  @Action(SetSelectionAction)
  setSelectionAction(ctx: StateContext<VoicedItemsStateInterface>, action: SetSelectionAction) {
    const state = ctx.getState();
    state.selectedVoicedItem = state.voicedItems.find((item) => item.id == action.id);
    ctx.patchState({
      selectedVoicedItem: state.selectedVoicedItem
    });
  }

  @Action(SelectItemAction)
  selectItemAction(ctx: StateContext<VoicedItemsStateInterface>, action: SelectItemAction) {
    const state = ctx.getState();
    ctx.patchState({
      selectedVoicedItems: [...state.selectedVoicedItems, action.id]
    });
    
    ctx.dispatch(new GetItemsAction(action.id));
  }

  @Action(SelectPreviousItemAction)
  selectPreviousItemAction(ctx: StateContext<VoicedItemsStateInterface>, action: SelectPreviousItemAction) {
    const state = ctx.getState();
    const shortenedList = [...state.selectedVoicedItems.filter((id) => id !== state.selectedVoicedItems.pop())];
    ctx.patchState({
      selectedVoicedItems: [...shortenedList]
    });
    if (shortenedList.length) {
      ctx.dispatch(new GetItemsAction(shortenedList.pop()));
    } else {
      ctx.dispatch(new GetCategoriesAction());
    }
  }

  @Action(ResetItemSelectionAction)
  resetItemSelectionAction(ctx: StateContext<VoicedItemsStateInterface>, action: ResetItemSelectionAction) {
    ctx.dispatch(new GetCategoriesAction());
    ctx.patchState({
      selectedVoicedItems: []
    });
  }

  @Action(ResetVoicedItemsList)
  resetItemsAction(ctx: StateContext<VoicedItemsStateInterface>, action: ResetVoicedItemsList) {
    ctx.dispatch(new GetCategoriesAction());
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

  @Action(GetItemImageAction)
  getItemIcon(ctx: StateContext<VoicedItemsStateInterface>, action: GetItemImageAction) {
    this.voicedItemsApiService.getImages(action.id).pipe(first()).subscribe((data: string) => {
      const state = ctx.getState();
      const selectedItem = state.voicedItems.find((item) => {
        item.name === action.id
      });
      if (selectedItem) {
        selectedItem.image = data;
        ctx.patchState({
          voicedItems: [...state.voicedItems]
        })
      }
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

  @Action(SetSelectionFormValuesAction)
  setFormValues(ctx: StateContext<VoicedItemsStateInterface>, action: SetSelectionFormValuesAction) {
    ctx.patchState({
      selectedVoicedItemFields: [...action.fields]
    })
  }
}
