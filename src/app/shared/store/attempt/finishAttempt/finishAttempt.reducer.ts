import {createReducer, on} from "@ngrx/store";
import {finishAttemptState} from "./finishAttempt.state";
import {
  finishAttemptAction, finishAttemptActionFailure,
  finishAttemptActionSuccess,
} from "./finishAttempt.action";

const _finishAttemptReducer = createReducer(
  finishAttemptState,
  on(finishAttemptAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(finishAttemptActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(finishAttemptActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function finishAttemptReducer(state: any, action: any) {
  return _finishAttemptReducer(state, action);

}
