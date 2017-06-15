import { Component } from '@angular/core';

@Component({
  selector: 'dy-counter',
  template: `
    <button (click)="decrease()"> - </button>
    {{ value }}
    <button (click)="increase()"> + </button>
  `
})
export class CounterComponent {
  value = 0;

  constructor() { }

  decrease() {
    this.value -= 1;
  }

  increase() {
    this.value += 1;
  }
}
