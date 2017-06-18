import { Action } from '@ngrx/store';

import { LOGOUT } from '../core/auth.reducer';
import { CoreAction } from '../core/core.reducer';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface InvertedState {
  inverted: boolean;
};

export class IncrementAction implements Action {
  readonly type = INCREMENT;
  payload: InvertedState;

  constructor(invertedState: InvertedState = { inverted: false }) {
    this.payload = invertedState;
  }
}

export class DecrementAction implements Action {
  readonly type = DECREMENT;
  payload: InvertedState;

  constructor(invertedState: InvertedState = { inverted: false }) {
    this.payload = invertedState;
  }
}

export type TodosAction
  = IncrementAction
  | DecrementAction;

export type CounterState = number;

export const initialState: CounterState = 0;

export function counterReducer(state = initialState, action: TodosAction | CoreAction) {
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
