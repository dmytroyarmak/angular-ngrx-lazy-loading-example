import { Inject, Injectable } from '@angular/core';
import { _INITIAL_REDUCER, combineReducers, Store } from '@ngrx/store';

@Injectable()
export class ReducerManager {
  private reducers;

  constructor(
    private store: Store<any>,
    @Inject(_INITIAL_REDUCER) initialReducers
  ) {
    this.reducers = initialReducers;
  }

  addReducer(key, reducer) {
    this.reducers = {
      ...this.reducers,
      [key]: reducer
    };
    this.store.replaceReducer(combineReducers(this.reducers));
  }
}
