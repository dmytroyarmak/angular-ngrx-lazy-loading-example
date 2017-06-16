import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LOGOUT } from './auth.reducer';

@Component({
  selector: 'dy-navigation',
  template: `
    <button type="button" (click)="onClickLogOut()">Log out</button>
    <nav>
      <a routerLink="/counter">Counter</a> |
      <a routerLink="/todos">Todos</a>
    </nav>
  `,
  styles: [`
    button {
      float: right;
    }
  `]
})
export class NavigationComponent {
  constructor(
    private store: Store<any>,
    private router: Router
  ) {}

  onClickLogOut() {
    this.store.dispatch({ type: LOGOUT });
    this.router.navigate(['/login']);
  }
}
