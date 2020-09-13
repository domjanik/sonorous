import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngxs/store";
import { ResetVoicedItemsList } from 'src/app/state/voicedItems/actions/list-actions';

@Component({
  selector: 'sonorous-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss'],
})
export class BottomMenuComponent implements OnInit {

  constructor(private router: Router, private store: Store) { }

  ngOnInit() { }

  goTo(route) {
    this.router.navigate(["app", route]);
  }

  goToHome() {
    this.router.navigate(["/app", "voicedItems"]);
    this.store.dispatch(new ResetVoicedItemsList())
  }
}
