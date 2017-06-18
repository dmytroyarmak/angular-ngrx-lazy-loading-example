import { Action } from '@ngrx/store';

import { LOGOUT } from '../core/auth.reducer';

export const ADD = 'ADD';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const TOGGLE_COMPLETION = 'TOGGLE_COMPLETION';
export const REMOVE = 'REMOVE';

export interface Todo {
  title: string;
  completed: boolean;
}
export type TodosState = Todo[]

export const initialState: TodosState = [];

export function todosReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_SUCCESS:
      return [
        action.payload,
        ...state
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
