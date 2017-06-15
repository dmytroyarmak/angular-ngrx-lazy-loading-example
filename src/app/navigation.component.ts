import { Component } from '@angular/core';

@Component({
  selector: 'dy-navigation',
  template: `
    <nav>
      <a routerLink="/counter">Counter</a> |
      <a routerLink="/todos">Todos</a>
    </nav>
  `,
  styles: [`
    .active-link {
      font-width: bold;
    }
  `]
})
export class NavigationComponent {}
