import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReducerManager } from '../core/reducer-manager.service';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { counterReducer } from './counter.reducer';
import { MdButtonModule, MdCardModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    CounterRoutingModule
  ],
  declarations: [
    CounterComponent
  ]
})
export class CounterModule {
  constructor(reducerManager: ReducerManager) {
    reducerManager.addReducer('counter', counterReducer);
  }
}
