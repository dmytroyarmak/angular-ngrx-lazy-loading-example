import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export interface Credentials {
  username: string;
  password: string;
}

export class LoginAction implements Action {
  readonly type = LOGIN;
  payload: Credentials;

  constructor(credentials: Credentials) {
    this.payload = credentials;
  }
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;
  payload: string;

  constructor(username: string) {
    this.payload = username;
  }
}

export class LoginErrorAction implements Action {
  readonly type = LOGIN_ERROR;
  payload: string;

  constructor(error: string) {
    this.payload = error;
  }
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;
}

export class LogoutSuccessAction implements Action {
  readonly type = LOGOUT_SUCCESS;
}

export type AuthAction
  = LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | LogoutAction
  | LogoutSuccessAction;

export interface AuthState {
  isInProgress: boolean;
  isLoggedIn: boolean;
  username: string;
  error: string;
}

export const initialState: AuthState = {
  isInProgress: false,
  isLoggedIn: false,
  username: null,
  error: null
};

export function authReducer(state = initialState, action: AuthAction) {
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

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}
