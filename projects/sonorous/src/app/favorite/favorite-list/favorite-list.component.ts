import { Component, OnInit } from '@angular/core';
import { Store, Select } from "@ngxs/store";
import { SelectItemAction, SetSelectionAction, SetSelectionFormValuesAction } from 'src/app/state/voicedItems/actions/list-actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GetFavoriteItemsAction } from 'src/app/state/favorite/actions/list-actions';

@Component({
  selector: 'sonorous-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
})
export class FavoriteListComponent implements OnInit {
  @Select('favorite.isLoading') isLoading: Observable<boolean>;
  @Select('favorite.favoriteItems') categories: Observable<any[]>;

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new GetFavoriteItemsAction());
  }

  categoryClicked(category: any) {
    this.store.dispatch(new SetSelectionAction(category.id));
    this.store.dispatch(new SetSelectionFormValuesAction([...category.fields]));
    this.router.navigate(['app', 'voiceditems', 'choose', category.categoryId]);
  }
}
