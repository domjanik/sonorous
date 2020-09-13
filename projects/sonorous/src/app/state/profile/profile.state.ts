import { Action, Actions, State, StateContext, Store } from '@ngxs/store';
import { Injectable } from "@angular/core";
import { initValues, ProfileStateInterface } from "./models/profile-state";
import { ProfileApiService } from "sonorous-api";
import { GetProfileAction, SetProfileLoadingAction, UpdateProfileAction, UpdateProfileFormAction } from './actions/list-actions';
import { first } from 'rxjs/operators';
import { ProfileModel } from './models/profileModel';

@Injectable()
@State<ProfileStateInterface>({
  name: 'profile',
  defaults: { ...initValues },
})
export class ProfileState {
  constructor(public store: Store, public actions: Actions, public profileApiService: ProfileApiService) {
  }

  @Action(SetProfileLoadingAction)
  setProfileLoading(ctx: StateContext<ProfileStateInterface>, action: SetProfileLoadingAction) {
    ctx.patchState({ isLoading: action.value })
  }

  @Action(GetProfileAction)
  getProfileAction(ctx: StateContext<ProfileStateInterface>, action: GetProfileAction) {
    ctx.dispatch(new SetProfileLoadingAction(true));
    this.profileApiService.getProfile().pipe(first()).subscribe((data: ProfileModel) => {
      ctx.patchState({
        profileData: { ...data },
        profileFormData: { ...data }
      })
      ctx.dispatch(new SetProfileLoadingAction(false));
    }, () => {
      ctx.dispatch(new SetProfileLoadingAction(false));
    })
  }

  @Action(UpdateProfileAction)
  updateProfileAction(ctx: StateContext<ProfileStateInterface>, action: UpdateProfileAction) {
    // ctx.dispatch(new SetProfileLoadingAction(true));
    const state = ctx.getState();
    // this.profileApiService.updateProfile(state.profileData).pipe(first()).subscribe((data: ProfileModel) => {
    ctx.patchState({
      profileData: { ...state.profileFormData }
    })
    // ctx.dispatch(new SetProfileLoadingAction(false));
    // }, () => {
    // ctx.dispatch(new SetProfileLoadingAction(false));
    // })
  }

  @Action(UpdateProfileFormAction)
  updateProfileFormAction(ctx: StateContext<ProfileStateInterface>, action: UpdateProfileFormAction) {
    let state = ctx.getState();
    ctx.patchState({
      profileFormData: { ...state.profileFormData, ...action.profileData }
    });
  }
}
