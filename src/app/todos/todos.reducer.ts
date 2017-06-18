import { Action } from '@ngrx/store';

import { LOGOUT } from '../core/auth.reducer';
import { CoreAction } from '../core/core.reducer';

export const ADD = 'ADD';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const TOGGLE_COMPLETION = 'TOGGLE_COMPLETION';
export const REMOVE = 'REMOVE';

export class AddAction implements Action {
  readonly type = ADD;
  payload: string;

  constructor(title: string) {
    this.payload = title;
  }
}

export class AddSuccessAction implements Action {
  readonly type = ADD_SUCCESS;
  payload: string;

  constructor(title: string) {
    this.payload = title;
  }
}

export class ToggleCompletionAction implements Action {
  readonly type = TOGGLE_COMPLETION;
  payload: Todo;

  constructor(todo: Todo) {
    this.payload = todo;
  }
}

export class RemoveAction implements Action {
  readonly type = REMOVE;
  payload: Todo;

  constructor(todo: Todo) {
    this.payload = todo;
  }
}

export type TodosAction
  = AddAction
  | AddSuccessAction
  | ToggleCompletionAction
  | RemoveAction;

export interface Todo {
  title: string;
  completed: boolean;
}
export type TodosState = Todo[]

export const initialState: TodosState = [];

export function todosReducer(state = initialState, action: TodosAction | CoreAction) {
  switch (action.type) {
    case ADD_SUCCESS:
      return [
        { title: action.payload, completed: false },
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
