import { Component } from '@angular/core';

@Component({
  selector: 'dy-navigation',
  template: `
    <nav md-tab-nav-bar>
      <a md-tab-link
         *ngFor="let tab of tabs"
         [routerLink]="tab.link"
         routerLinkActive #rla="routerLinkActive"
         [active]="rla.isActive">
        {{tab.label}}
      </a>
    </nav>
  `
})
export class NavigationComponent {
  tabs = [
    {
      link: '/counter',
      label: 'Counter'
    },
    {
      link: '/todos',
      label: 'TODOs'
    }
  ];
}
