import {createReducer, on} from "@ngrx/store";
import {finishCareerQuizState} from "./finishCareerQuiz.state";
import {
  finishCareerQuizAction,
  finishCareerQuizActionSuccess,
  finishCareerQuizActionFailure,
} from "./finishCareerQuiz.action";

const _finishCareerQuizReducer = createReducer(
  finishCareerQuizState,
  on(finishCareerQuizAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(finishCareerQuizActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(finishCareerQuizActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function finishCareerQuizReducer(state: any, action: any) {
  return _finishCareerQuizReducer(state, action);
}
