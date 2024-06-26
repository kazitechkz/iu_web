import {createReducer, on} from "@ngrx/store";
import {answeredResultState} from "./answerResult.state";
import {
  onAnsweredResultAction,
  onAnsweredResultClearAction,
  onAnsweredResultActionFailure,
  onAnsweredResultActionSuccess
} from "./answerResult.action";

const _answeredResultReducer = createReducer(
  answeredResultState,
  on(onAnsweredResultAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(onAnsweredResultClearAction, (state) => {
    return {
      ...state,
      data: null
    }
  }),
  on(onAnsweredResultActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(onAnsweredResultActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function answeredResultReducer(state: any, action: any) {
  return _answeredResultReducer(state, action);

}
