import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { counterReducer, CounterState } from './counter.reducer';
import { CoreAppState } from '../core/core.module';
import { CounterEffects } from './counter.effects';
import { StoreModule } from '@ngrx/store';

export interface CounterAppState extends CoreAppState {
  counter: CounterState;
}

@NgModule({
  imports: [
    SharedModule,
    CounterRoutingModule,
    StoreModule.forFeature('counter', counterReducer),
    EffectsModule.forFeature([CounterEffects])
  ],
  declarations: [
    CounterComponent
  ]
})
export class CounterModule {}
