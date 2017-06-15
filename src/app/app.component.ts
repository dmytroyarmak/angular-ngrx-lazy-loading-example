import { Component } from '@angular/core';

@Component({
  selector: 'dy-root',
  template: `
    <pre>angular-ngrx-lazy-loading-example</pre>
    <hr/>
    <dy-navigation></dy-navigation>
    <hr/>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
