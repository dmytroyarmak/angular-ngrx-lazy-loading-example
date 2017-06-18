import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';

import { DECREMENT, INCREMENT } from './counter.reducer';

@Injectable()
export class CounterEffects {
  constructor(
    private actions$: Actions
  ) {}

  @Effect() invertIncrement$ = this.actions$
    .ofType(INCREMENT)
    .filter(action => !action.payload || !action.payload.inverted)
    .delay(1000)
    .mapTo({ type: DECREMENT, payload: { inverted: true } });

  @Effect() invertDecrement$ = this.actions$
    .ofType(DECREMENT)
    .filter(action => !action.payload || !action.payload.inverted)
    .delay(1000)
    .mapTo({ type: INCREMENT, payload: { inverted: true } });
}
