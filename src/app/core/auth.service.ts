import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  isLoggedIn = false;
  username = null;

  constructor(
    private router: Router
  ){}

  logIn(username, password) {
    this.isLoggedIn = true;
    this.username = username;
    this.router.navigate(['/']);
  }
}
