import { Component } from '@angular/core';

@Component({
  selector: 'dy-layout',
  template: `
    <dy-navigation></dy-navigation>
    <hr/>
    <router-outlet></router-outlet>
  `
})
export class LayoutComponent {}
