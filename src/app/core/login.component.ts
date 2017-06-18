import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginAction } from './auth.reducer';
import { CoreAppState } from './core.module';

@Component({
  selector: 'dy-login',
  template: `
    <md-card *ngIf="isNotLoggedIn$ | async">
      <md-card-subtitle>{{ error$ | async }}</md-card-subtitle>
      <md-card-content>
        <div *ngIf="isInProgress$ | async; else loginForm">
          Login in progress...
        </div>

        <ng-template #loginForm>
          <form (submit)="onSubmit()" fxLayout="column">
            <md-input-container>
              <input mdInput autofocus placeholder="Username" name="username" [(ngModel)]="username">
            </md-input-container>
            <md-input-container>
              <input mdInput placeholder="Password" name="password" [(ngModel)]="password">
            </md-input-container>
            <button md-raised-button type="submit">Log in</button>
          </form>
        </ng-template>
      </md-card-content>
    </md-card>
  `
})
export class LoginComponent implements OnInit {
  error$;
  isInProgress$;
  isNotLoggedIn$;

  username = '';
  password = '';

  constructor(
    private store: Store<CoreAppState>
  ) { }

  ngOnInit() {
    this.error$ = this.store.select(state => state.core.auth.error);
    this.isInProgress$ = this.store.select(state => state.core.auth.isInProgress);
    this.isNotLoggedIn$ = this.store.select(state => !state.core.auth.isLoggedIn);
  }

  onSubmit() {
    this.store.dispatch(new LoginAction({
      username: this.username,
      password: this.password
    }));
  }
}
