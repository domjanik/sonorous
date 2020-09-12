import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sonorous-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss'],
})
export class BottomMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goTo(route) {
    this.router.navigate(["app", route])
  }
}
