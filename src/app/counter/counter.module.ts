import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ReducerManager } from '../core/reducer-manager.service';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { counterReducer, CounterState } from './counter.reducer';
import { CoreAppState } from '../core/core.module';

export interface CounterAppState extends CoreAppState {
  counter: CounterState;
}

@NgModule({
  imports: [
    SharedModule,
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
