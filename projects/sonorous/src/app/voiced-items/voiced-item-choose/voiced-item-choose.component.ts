import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, Select } from "@ngxs/store";
import { ActivatedRoute, Router } from '@angular/router';
import { VoicedItemModel } from 'src/app/state/voicedItems/models/voicedItemModel';
import { Observable } from 'rxjs';
import { LoadVoicedItemAction, SelectItemAction, SetSelectionAction } from 'src/app/state/voicedItems/actions/list-actions';
import { first } from 'rxjs/operators';
import { AddFavoriteItemAction, RemoveFavoriteItemAction } from 'src/app/state/favorite/actions/list-actions';
import { FavoriteFieldModel } from 'src/app/state/favorite/models/favoriteModel';

@Component({
  selector: 'sonorous-voiced-item-choose',
  templateUrl: './voiced-item-choose.component.html',
  styleUrls: ['./voiced-item-choose.component.scss'],
})
export class VoicedItemChooseComponent implements OnInit, OnDestroy {
  @Select('voicedItems.selectedVoicedItem') voicedItem: Observable<VoicedItemModel>;
  @Select('voicedItems.selectedVoicedItemFields') fieldValues: Observable<FavoriteFieldModel[]>;

  checked: boolean;
  id: string;
  private sub: any;
  showMock: boolean = false;

  amountEnabled: boolean = false;
  discount: boolean = false;
  amount: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store) { }

  ngOnInit() {
    this.voicedItem.pipe(first()).subscribe((data) => {
      if (!data) {
        this.router.navigate(['app', 'voiceditems']);
      }
    })
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.store.dispatch(new LoadVoicedItemAction(this.id))
    });

    this.fieldValues.pipe(first()).subscribe((fields) => {
      fields.forEach((field: any) => {
        let convertedField: number | boolean | string;
        switch (field.type) {
          case 0:
            convertedField = (field.value === "true")
            break;
          case 1:
            convertedField = Number(field.value);
            break;
          default:
            convertedField = field.value
        }
        this[field.name] = convertedField;
      })
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  play() {
    this.showMock = true;
    let audio = new Audio();
    audio.src = "http://localhost:5000/api/Voice/GetVoice/Ticket";
    audio.load();
    audio.play();
    audio.onended = (() => {
      this.showMock = false;
    })
  }

  removeFromFavorite() {
    this.voicedItem.pipe(first()).subscribe((data) => {
      this.store.dispatch(new RemoveFavoriteItemAction(data.id));
    });
  }

  addToFavorite() {
    this.voicedItem.pipe(first()).subscribe((data) => {
      this.store.dispatch(new AddFavoriteItemAction(data.id, data.name, [{
        name: "amount",
        value: this.amount.toString(),
        type: 1
      }, {
        name: "amountEnabled",
        value: this.amountEnabled.toString(),
        type: 0
      }, {
        name: "discount",
        value: this.discount.toString(),
        type: 0
      }]));
    })
  }
}
