import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LOGOUT } from './auth.reducer';

@Component({
  selector: 'dy-toolbar',
  template: `
    <md-toolbar color="primary">
      <span fxFlex="1 0 auto">angular-ngrx-lazy-loading-example</span>
      <button *ngIf="isLoggedIn$ | async" md-icon-button [mdMenuTriggerFor]="menu">
        <md-icon>more_vert</md-icon>
      </button>
      <md-menu #menu="mdMenu">
        <button md-menu-item (click)="onClickLogOut()">
          <md-icon>lock</md-icon>
          <span>Log out</span>
        </button>
      </md-menu>
    </md-toolbar>
  `,
  styles: []
})
export class ToolbarComponent implements OnInit {
  isLoggedIn$;

  constructor(
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoggedIn$ = this.store.select('core', 'auth', 'isLoggedIn');
  }

  onClickLogOut() {
    this.store.dispatch({ type: LOGOUT });
    this.router.navigate(['/login']);
  }
}
