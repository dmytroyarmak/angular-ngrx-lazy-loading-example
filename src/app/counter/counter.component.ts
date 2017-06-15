import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { DECREMENT, INCREMENT } from './counter.reducer';

@Component({
  selector: 'dy-counter',
  template: `
    <button (click)="decrement()"> - </button>
    {{ counter | async }}
    <button (click)="increment()"> + </button>
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
    this.store.dispatch({ type: DECREMENT})
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }
}
