import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DECREMENT, INCREMENT } from './counter.reducer';
import { CounterAppState } from './counter.module';

@Component({
  selector: 'dy-counter',
  template: `
    <md-card>
      <button md-icon-button (click)="decrement()"><md-icon>remove</md-icon></button>
      {{ counter$ | async }}
      <button md-icon-button (click)="increment()"><md-icon>add</md-icon></button>
    </md-card>
  `
})
export class CounterComponent implements OnInit {
  counter$;

  constructor(
    private store: Store<CounterAppState>
  ) {}

  ngOnInit() {
    this.counter$ = this.store.select(state => state.counter);
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT })
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }
}
