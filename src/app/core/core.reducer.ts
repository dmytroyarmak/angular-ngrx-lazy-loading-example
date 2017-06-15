import { combineReducers } from "@ngrx/store";
import { authReducer } from "./auth.reducer";

export const coreReducer = combineReducers({
  auth: authReducer
});
