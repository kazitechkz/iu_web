import {createReducer, on} from "@ngrx/store";
import {getMySubjectsState} from "./getMySubjects.state";
import {
  getMySubjectsAction, getMySubjectsActionSuccess, getMySubjectsActionFailure,
} from "./getMySubjects.action";

const _getMySubjectsReducer = createReducer(
  getMySubjectsState,
  on(getMySubjectsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getMySubjectsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getMySubjectsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getMySubjectsReducer(state: any, action: any) {
  return _getMySubjectsReducer(state, action);
}
