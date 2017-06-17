import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from './auth.service';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from './auth.reducer';

@Component({
  selector: 'dy-login',
  template: `
    <div>{{ error | async }}</div>

    <div *ngIf="isInProgress | async; else: loginForm" >
      Login in progress...
    </div>

    <ng-template #loginForm>
      <form (submit)="onSubmit()">
        <label>
          <div>Username:</div>
          <input type="text" name="username" [(ngModel)]="username"/>
        </label>
        <label>
          <div>Password:</div>
          <input type="password" name="password" [(ngModel)]="password"/>
        </label>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </ng-template>
  `
})
export class LoginComponent implements OnInit {
  error;
  isInProgress;
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private store: Store<any>,
    private router: Router
  ) { }

  ngOnInit() {
    this.error = this.store.select('core', 'auth', 'error');
    this.isInProgress = this.store.select('core', 'auth', 'isInProgress');
  }

  onSubmit() {
    this.store.dispatch({ type: LOGIN });
    this.authService
      .logIn(this.username, this.password)
      .subscribe(({username}) => {
        this.store.dispatch({
          type: LOGIN_SUCCESS,
          payload: username
        });
        this.router.navigate(['/']);
      }, (error) => {
        this.store.dispatch({
          type: LOGIN_ERROR,
          payload: error
        });
      });
  }
}
