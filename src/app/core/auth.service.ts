import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  logIn(username, password) {
    if (username === 'admin' && password === 'admin') {
      return Observable.of({username}).delay(500);
    } else {
      return Observable.throw('Something went wrong. Please, try again.');
    }
  }
}
