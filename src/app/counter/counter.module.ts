import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from 'app/counter/counter.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore({
      counter: counterReducer
    }),
    CounterRoutingModule
  ],
  declarations: [
    CounterComponent
  ]
})
export class CounterModule { }
