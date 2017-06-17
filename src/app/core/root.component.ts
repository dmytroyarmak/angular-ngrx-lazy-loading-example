import { Component } from '@angular/core';

@Component({
  selector: 'dy-root',
  template: `
    <dy-toolbar></dy-toolbar>
    <router-outlet></router-outlet>
  `
})
export class RootComponent {}
