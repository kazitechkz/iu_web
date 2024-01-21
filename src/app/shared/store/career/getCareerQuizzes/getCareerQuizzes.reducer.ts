import {createReducer, on} from "@ngrx/store";
import {getCareerQuizzesState} from "./getCareerQuizzes.state";
import {
  getCareerQuizzesAction,
  getCareerQuizzesActionSuccess,
  getCareerQuizzesActionFailure,
} from "./getCareerQuizzes.action";

const _getCareerQuizzesReducer = createReducer(
  getCareerQuizzesState,
  on(getCareerQuizzesAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getCareerQuizzesActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getCareerQuizzesActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getCareerQuizzesReducer(state: any, action: any) {
  return _getCareerQuizzesReducer(state, action);
}
