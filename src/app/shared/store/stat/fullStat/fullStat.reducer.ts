import {createReducer, on} from "@ngrx/store";
import {fullStatState} from "./fullStat.state";
import {fullStatAction, fullStatFailureAction, fullStatSuccessAction} from "./fullStat.action";


const _fullStatReducer = createReducer(
  fullStatState,
  on(fullStatAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(fullStatSuccessAction, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(fullStatFailureAction, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function fullStatReducer(state: any, action: any) {
  return _fullStatReducer(state, action);
}
