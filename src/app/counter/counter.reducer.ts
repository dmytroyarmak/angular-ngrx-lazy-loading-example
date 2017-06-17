import { Action } from '@ngrx/store';

import { LOGOUT } from '../core/auth.reducer';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export type CounterState = number;

export const initialState: CounterState = 0;

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}
