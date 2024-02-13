import {createReducer, on} from "@ngrx/store";
import {getCareerQuizGroupListState} from "./getCareerQuizGroupList.state";
import {
  getCareerQuizGroupListAction,
  getCareerQuizGroupListActionFailure,
  getCareerQuizGroupListActionSuccess
} from "./getCareerQuizGroupList.action";

const _getCareerQuizGroupListReducer = createReducer(
  getCareerQuizGroupListState,
  on(getCareerQuizGroupListAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getCareerQuizGroupListActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getCareerQuizGroupListActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getCareerQuizGroupListReducer(state: any, action: any) {
  return _getCareerQuizGroupListReducer(state, action);
}
