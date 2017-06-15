import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<any>,
    private router: Router
  ) {}

  canActivate(){
    return this.store
      .select('core', 'auth', 'isLoggedIn')
      .do((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
        }
      });
  }
}
