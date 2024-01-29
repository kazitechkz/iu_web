import {createReducer, on} from "@ngrx/store";
import {
  resultCareerQuizAction,
  resultCareerQuizActionSuccess,
  resultCareerQuizActionFailure
} from "./resultCareerQuiz.action";
import {resultCareerQuizState} from "./resultCareerQuiz.state";

const _resultCareerQuizReducer = createReducer(
  resultCareerQuizState,
  on(resultCareerQuizAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(resultCareerQuizActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(resultCareerQuizActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function resultCareerQuizReducer(state: any, action: any) {
  return _resultCareerQuizReducer(state, action);
}
