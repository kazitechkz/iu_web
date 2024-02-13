import {createReducer, on} from "@ngrx/store";
import {myCareerAttemptsState} from "./myCareerAttempts.state";
import {
  myCareerAttemptsAction,
  myCareerAttemptsActionFailure,
  myCareerAttemptsActionSuccess
} from "./myCareerAttempts.action";

const _myCareerAttemptsReducer = createReducer(
  myCareerAttemptsState,
  on(myCareerAttemptsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(myCareerAttemptsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(myCareerAttemptsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function myCareerAttemptsReducer(state: any, action: any) {
  return _myCareerAttemptsReducer(state, action);
}
