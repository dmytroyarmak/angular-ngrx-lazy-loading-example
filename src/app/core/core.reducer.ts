import { combineReducers } from '@ngrx/store';
import { authReducer } from './auth.reducer';

const combinedCoreReducers = combineReducers({
  auth: authReducer
});

export function coreReducer(state: any, action: any) {
  return combinedCoreReducers(state, action);
};
