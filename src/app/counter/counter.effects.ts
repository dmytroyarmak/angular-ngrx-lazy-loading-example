import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';

import { DECREMENT, DecrementAction, INCREMENT, IncrementAction } from './counter.reducer';

@Injectable()
export class CounterEffects {
  constructor(
    private actions$: Actions
  ) {}

  @Effect() invertIncrement$ = this.actions$
    .ofType(INCREMENT)
    .filter((action: IncrementAction) => !action.payload.inverted)
    .delay(1000)
    .mapTo(new DecrementAction({ inverted: true}));

  @Effect() invertDecrement$ = this.actions$
    .ofType(DECREMENT)
    .filter((action: DecrementAction) => !action.payload.inverted)
    .delay(1000)
    .mapTo(new IncrementAction({ inverted: true }));
}
