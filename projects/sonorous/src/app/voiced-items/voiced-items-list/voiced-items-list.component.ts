import { Component, OnInit } from '@angular/core';
import { Store, Select } from "@ngxs/store";
import { GetItemsAction, GetCategoriesAction, SelectItemAction, SetSelectionAction } from 'src/app/state/voicedItems/actions/list-actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'sonorous-voiced-items-list',
  templateUrl: './voiced-items-list.component.html',
  styleUrls: ['./voiced-items-list.component.scss'],
})
export class VoicedItemsListComponent implements OnInit {
  @Select('voicedItems.isLoading') isLoading: Observable<boolean>;
  @Select('voicedItems.voicedItems') categories: Observable<any[]>;

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new GetCategoriesAction());
  }

  categoryClicked(category: any) {
    if (category.hasChildren) {
      this.store.dispatch(new SelectItemAction(category.id));
    } else {
      this.store.dispatch(new SetSelectionAction(category.id));
      this.router.navigate(['app', 'voiceditems', 'choose', category.id]);
    }
  }
}
