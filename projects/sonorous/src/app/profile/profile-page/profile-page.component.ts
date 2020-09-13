import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, first } from 'rxjs/operators';
import { Store, Select } from "@ngxs/store";
import { UpdateProfileAction, UpdateProfileFormAction } from 'src/app/state/profile/actions/list-actions';
import { ProfileModel } from 'src/app/state/profile/models/profileModel';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sonorous-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  @Select('profile.profileData') profileData: Observable<ProfileModel>;
  @Select('profile.profileFormData') profileFormData: Observable<ProfileModel>;

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    discountType: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])

  });
  formSubscription: Subscription;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.profileFormData.subscribe((data) => {
      if (data) {
        this.profileForm.setValue({
          name: data.name,
          birthDate: data.birthDate,
          discountType: Number(data.discountType),
          phoneNumber: data.phoneNumber,
          gender: Number(data.gender)
        });
      }
    })

    this.formSubscription = this.profileForm.valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b))).subscribe((value) => {
        this.store.dispatch(new UpdateProfileFormAction(value))
      }
      )
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }

  saveProfile() {
    if (this.profileForm.status === "VALID") {
      this.profileFormData.pipe(first()).subscribe(() => {
        this.store.dispatch(new UpdateProfileAction());
      });
    }
  }
}
