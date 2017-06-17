import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from './auth.service';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from './auth.reducer';

@Component({
  selector: 'dy-login',
  template: `
    <md-card>
      <md-card-subtitle>{{ error | async }}</md-card-subtitle>
      <md-card-content>
        <div *ngIf="isInProgress | async; else loginForm" >
          Login in progress...
        </div>

        <ng-template #loginForm>
          <form (submit)="onSubmit()" fxLayout="column">
            <md-input-container>
              <input mdInput placeholder="Username" name="username" [(ngModel)]="username">
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
      .subscribe(({ username }) => {
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
