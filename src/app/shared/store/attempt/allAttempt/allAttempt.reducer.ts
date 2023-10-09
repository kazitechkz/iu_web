import {createReducer, on} from "@ngrx/store";
import {allAttemptState} from "./allAttempt.state";
import {allAttemptAction, allAttemptActionFailure, allAttemptActionSuccess} from "./allAttempt.action";

const _allAttemptReducer = createReducer(
  allAttemptState,
  on(allAttemptAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(allAttemptActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(allAttemptActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function allAttemptReducer(state: any, action: any) {
  return _allAttemptReducer(state, action);

}
