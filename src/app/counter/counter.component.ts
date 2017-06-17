import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DECREMENT, INCREMENT } from './counter.reducer';

@Component({
  selector: 'dy-counter',
  template: `
    <md-card>
      <button md-icon-button (click)="decrement()"><md-icon>remove</md-icon></button>
      {{ counter | async }}
      <button md-icon-button (click)="increment()"><md-icon>add</md-icon></button>
    </md-card>
  `
})
export class CounterComponent implements OnInit {
  counter;

  constructor(
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.counter = this.store.select('counter');
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT })
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }
}
