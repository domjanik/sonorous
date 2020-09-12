import { Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { TestAction } from 'src/app/state/voicedItems/actions/form-actions';

@Component({
  selector: 'sonorous-voiced-items-list',
  templateUrl: './voiced-items-list.component.html',
  styleUrls: ['./voiced-items-list.component.scss'],
})
export class VoicedItemsListComponent implements OnInit {

  constructor(private store: Store) { console.log("test") }

  ngOnInit() { }

  exampleGet() {
    this.store.dispatch(new TestAction());
  }

}
