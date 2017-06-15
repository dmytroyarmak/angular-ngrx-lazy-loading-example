import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const initialState = {
  isInProgress: false,
  isLoggedIn: false,
  username: null,
  error: null
};

export function authReducer(state = initialState, action: Action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isInProgress: true,
        error: null
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isInProgress: false,
        isLoggedIn: true,
        username: action.payload
      };

    case LOGIN_ERROR:
      return {
        ...state,
        isInProgress: false,
        error: action.payload
      };

    default:
      return state;
  }
}
