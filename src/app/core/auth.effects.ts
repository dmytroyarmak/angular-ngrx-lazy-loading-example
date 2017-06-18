import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mapTo';

import {
  LOGIN, LoginAction, LoginErrorAction, LoginSuccessAction, LOGOUT, LogoutSuccessAction
} from './auth.reducer';
import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService
  ) {}

  @Effect() login$ = this.actions$
    .ofType(LOGIN)
    .switchMap((action: LoginAction) => this.authService.logIn(action.payload))
    .do(() => {
      this.router.navigate(['/']);
    })
    .map(({ username }) => new LoginSuccessAction(username))
    .catch((error) => Observable.of(new LoginErrorAction(error)));

  @Effect() logout$ = this.actions$
    .ofType(LOGOUT)
    .do(() => {
      this.router.navigate(['/login']);
    })
    .map(_ => new LogoutSuccessAction());
}
