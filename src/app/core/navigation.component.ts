import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LOGOUT } from './auth.reducer';

@Component({
  selector: 'dy-navigation',
  template: `
    <div class="push-right">
      You logged in as <strong>{{ username | async }}</strong>
      <button type="button" (click)="onClickLogOut()">Log out</button>
    </div>
    <nav>
      <a routerLink="/counter">Counter</a> |
      <a routerLink="/todos">Todos</a>
    </nav>
  `,
  styles: [`
    .push-right {
      float: right;
    }
  `]
})
export class NavigationComponent implements OnInit{
  username;

  constructor(
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit() {
    this.username = this.store.select('core', 'auth', 'username');
  }

  onClickLogOut() {
    this.store.dispatch({ type: LOGOUT });
    this.router.navigate(['/login']);
  }
}
