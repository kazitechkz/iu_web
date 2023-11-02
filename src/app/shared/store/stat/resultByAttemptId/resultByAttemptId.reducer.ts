import {createReducer, on} from "@ngrx/store";
import {resultByAttemptIdState} from "./resultByAttemptId.state";
import {resultByAttemptIdAction, resultByAttemptIdFailureAction, resultByAttemptIdSuccessAction} from "./resultByAttemptId.action";


const _resultByAttemptIdReducer = createReducer(
  resultByAttemptIdState,
  on(resultByAttemptIdAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(resultByAttemptIdSuccessAction, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(resultByAttemptIdFailureAction, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function resultByAttemptIdReducer(state: any, action: any) {
  return _resultByAttemptIdReducer(state, action);
}
