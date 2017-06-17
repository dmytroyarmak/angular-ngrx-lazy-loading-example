import { combineReducers } from '@ngrx/store';
import { authReducer, AuthState } from './auth.reducer';

export interface CoreState {
  auth: AuthState;
}

const combinedCoreReducers = combineReducers({
  auth: authReducer
});

export function coreReducer(state: any, action: any) {
  return combinedCoreReducers(state, action);
};
