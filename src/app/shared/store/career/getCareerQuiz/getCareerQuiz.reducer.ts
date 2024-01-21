import {createReducer, on} from "@ngrx/store";
import {getCareerQuizAction, getCareerQuizActionFailure, getCareerQuizActionSuccess} from "./getCareerQuiz.action";
import {getCareerQuizState} from "./getCareerQuiz.state";

const _getCareerQuizReducer = createReducer(
  getCareerQuizState,
  on(getCareerQuizAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getCareerQuizActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getCareerQuizActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getCareerQuizReducer(state: any, action: any) {
  return _getCareerQuizReducer(state, action);
}
