import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <mat-toolbar>
      <explore-nav></explore-nav>
    </mat-toolbar>
  `,
  styles: [`
    mat-toolbar {
      background: rgba(0, 0, 0, .01);
    }
  `],
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
