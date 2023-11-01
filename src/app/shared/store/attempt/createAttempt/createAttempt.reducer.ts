import {createReducer, on} from "@ngrx/store";
import {createAttemptState} from "./createAttempt.state";
import {
  createAttemptAction, createAttemptActionFailure,
  createAttemptActionSuccess,
} from "./createAttempt.action";

const _createAttemptReducer = createReducer(
  createAttemptState,
  on(createAttemptAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(createAttemptActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(createAttemptActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function createAttemptReducer(state: any, action: any) {
  return _createAttemptReducer(state, action);

}
