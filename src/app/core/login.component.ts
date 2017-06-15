import { Component } from '@angular/core';
import { AuthService } from "./auth.service";

@Component({
  selector: 'dy-login',
  template: `
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
  `
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private authService: AuthService
  ) { }

  onSubmit() {
    this.authService.logIn(this.username, this.password);
  }
}
