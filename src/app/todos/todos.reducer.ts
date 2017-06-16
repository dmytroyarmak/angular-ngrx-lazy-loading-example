import { Action } from '@ngrx/store';

import { LOGOUT } from '../core/auth.reducer';

export const ADD = 'ADD';
export const TOGGLE_COMPLETION = 'TOGGLE_COMPLETION';
export const REMOVE = 'REMOVE';

export const initialState = [];

export function todosReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.payload
      ];

    case TOGGLE_COMPLETION:
      const todoIndex = state.indexOf(action.payload);
      return [
        ...state.slice(0, todoIndex),
        {
          title: action.payload.title,
          completed: !action.payload.completed
        },
        ...state.slice(todoIndex + 1)
      ];

    case REMOVE:
      const indexToRemove = state.indexOf(action.payload);
      return [
        ...state.slice(0, indexToRemove),
        ...state.slice(indexToRemove + 1)
      ];

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}
