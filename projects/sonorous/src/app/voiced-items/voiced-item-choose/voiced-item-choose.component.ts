import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, Select } from "@ngxs/store";
import { ActivatedRoute, Router } from '@angular/router';
import { VoicedItemModel } from 'src/app/state/voicedItems/models/voicedItemModel';
import { Observable } from 'rxjs';
import { SelectItemAction, SetSelectionAction } from 'src/app/state/voicedItems/actions/list-actions';
import { first } from 'rxjs/operators';

@Component({
  selector: 'sonorous-voiced-item-choose',
  templateUrl: './voiced-item-choose.component.html',
  styleUrls: ['./voiced-item-choose.component.scss'],
})
export class VoicedItemChooseComponent implements OnInit, OnDestroy {
  @Select('voicedItems.selectedVoicedItem') voicedItem: Observable<VoicedItemModel>;
  checked: boolean;
  id: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store) { }

  ngOnInit() {
    this.voicedItem.pipe(first()).subscribe((data) => {
      if (!data) {
        this.router.navigate(['app', 'voiceditems']);
      }
    })
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
