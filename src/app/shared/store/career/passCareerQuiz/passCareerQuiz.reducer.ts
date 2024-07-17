import {createReducer, on} from "@ngrx/store";
import {
  passCareerQuizAction,
  passCareerQuizActionSuccess,
  passCareerQuizActionFailure, passCareerQuizActionClear
} from "./passCareerQuiz.action";
import {passCareerQuizState} from "./passCareerQuiz.state";

const _passCareerQuizReducer = createReducer(
  passCareerQuizState,
  on(passCareerQuizActionClear, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(passCareerQuizAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(passCareerQuizActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(passCareerQuizActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function passCareerQuizReducer(state: any, action: any) {
  return _passCareerQuizReducer(state, action);
}
