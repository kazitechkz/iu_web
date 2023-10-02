import {createReducer, on} from "@ngrx/store";
import {getAttemptState} from "./getAttempt.state";
import {getAttemptAction, getAttemptActionFailure, getAttemptActionSuccess} from "./getAttempt.action";

const _getAttemptReducer = createReducer(
  getAttemptState,
  on(getAttemptAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(getAttemptActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getAttemptActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getAttemptReducer(state: any, action: any) {
  return _getAttemptReducer(state, action);

}
