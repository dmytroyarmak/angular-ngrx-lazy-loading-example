import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mapTo';

import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, LOGOUT_SUCCESS } from './auth.reducer';
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
    .switchMap((action) => this.authService.logIn(action.payload))
    .do(() => {
      this.router.navigate(['/']);
    })
    .map(({ username }) => ({
      type: LOGIN_SUCCESS,
      payload: username
    }))
    .catch((error) => Observable.of({
      type: LOGIN_ERROR,
      payload: error
    }));

  @Effect() logout$ = this.actions$
    .ofType(LOGOUT)
    .do(() => {
      this.router.navigate(['/login']);
    })
    .mapTo({ type: LOGOUT_SUCCESS });
}
