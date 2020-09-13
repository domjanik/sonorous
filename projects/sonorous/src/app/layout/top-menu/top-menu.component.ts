import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, Select } from "@ngxs/store";
import { Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { ResetItemSelectionAction, SelectPreviousItemAction } from 'src/app/state/voicedItems/actions/list-actions';
import { VoicedItemModel } from 'src/app/state/voicedItems/models/voicedItemModel';

@Component({
  selector: 'sonorous-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit, OnDestroy {
  @Select('voicedItems.selectedVoicedItems') voicedItems: Observable<VoicedItemModel[]>;
  @Select('voicedItems.selectedVoicedItem') voicedItem: Observable<VoicedItemModel>;
  private sub: Subscription;
  private currentRoute: string = "";
  private id: string;
  private hasItems: boolean = false;
  public pageTitle: string = "";

  @HostBinding('class')
  get valid() {
    let classes = ""
    if (this.hasItems) {
      classes += "showBack"
    }
    if (this.currentRoute) {
      if (this.currentRoute?.indexOf("choose") !== -1 || this.currentRoute?.indexOf("profile") !== -1) {
        classes += " showBack choose"
      }
    }
    return classes;
  }

  constructor(private router: Router, private store: Store, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.voicedItems.pipe().subscribe((data) => {
      this.hasItems = !!data.length;
    })
    this.sub = this.router.events.subscribe((val: any) => {
      if (val.url) {
        this.currentRoute = val.url;
        if (val.url.indexOf('choose') === -1) {
          this.pageTitle = 'menu.' + val.url.replace('/app/', '')
        } else {
          this.voicedItem.pipe(first()).subscribe((data) => {
            this.pageTitle = data?.displayName;
          })
        }
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    this.router.navigate(["app", "voiceditems"]);
    this.store.dispatch(new SelectPreviousItemAction());
  }
}
