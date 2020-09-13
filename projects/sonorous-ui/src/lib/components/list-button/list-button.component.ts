import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'sonorous-ui-list-button',
  templateUrl: './list-button.component.html',
  styleUrls: ['./list-button.component.scss'],
})
export class ListButtonComponent implements OnInit {
  @Input() url: string;

  @HostBinding("class.has-children")
  @Input() hasChildren: boolean;

  constructor() { }

  ngOnInit() { }

}
