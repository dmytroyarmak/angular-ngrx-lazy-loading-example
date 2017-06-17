import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/do';
import { CoreAppState } from 'app/core/core.module';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<CoreAppState>,
    private router: Router
  ) {}

  canActivate() {
    return this.store
      .select(state => state.core.auth.isLoggedIn)
      .do((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
        }
      });
  }
}
