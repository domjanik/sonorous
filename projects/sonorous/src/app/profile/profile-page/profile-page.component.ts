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
  @Select('cyclic.paymentForm') paymentFormData: Observable<ProfileModel>;

  paymentForm = new FormGroup({
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
    this.paymentFormData.subscribe((data) => {
      if (data) {
        this.paymentForm.setValue({
          name: data.name,
          birthDate: data.birthDate,
          discountType: data.discountType,
          phoneNumber: data.phoneNumber
        });
      }
    })

    this.formSubscription = this.paymentForm.valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b))).subscribe((value) => {
        this.store.dispatch(new UpdateProfileFormAction(value))
      }
      )
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }

  savePayment() {
    if (this.paymentForm.status === "VALID") {
      this.paymentFormData.pipe(first()).subscribe((data) => {
        this.store.dispatch(new UpdateProfileAction());
      });
    }
  }
}
