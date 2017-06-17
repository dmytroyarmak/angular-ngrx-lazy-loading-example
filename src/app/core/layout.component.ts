import { Component } from '@angular/core';

@Component({
  selector: 'dy-layout',
  template: `
    <dy-navigation></dy-navigation>
    <router-outlet></router-outlet>
  `
})
export class LayoutComponent {}
