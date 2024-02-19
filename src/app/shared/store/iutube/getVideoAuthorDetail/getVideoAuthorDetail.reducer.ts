import {createReducer, on} from "@ngrx/store";
import {getVideoAuthorDetailState} from "./getVideoAuthorDetail.state";
import {
  getVideoAuthorDetail,
  getVideoAuthorDetailFailure,
  getVideoAuthorDetailSuccess
} from "./getVideoAuthorDetail.action";

const _getVideoAuthorDetailReducer = createReducer(
  getVideoAuthorDetailState,
  on(getVideoAuthorDetail, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getVideoAuthorDetailSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getVideoAuthorDetailFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getVideoAuthorDetailReducer(state: any, action: any) {
  return _getVideoAuthorDetailReducer(state, action);
}
