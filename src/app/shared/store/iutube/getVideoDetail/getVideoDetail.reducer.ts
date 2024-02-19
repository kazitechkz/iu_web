import {createReducer, on} from "@ngrx/store";
import {getVideoDetailState} from "./getVideoDetail.state";
import {
  getVideoDetail,
  getVideoDetailFailure,
  getVideoDetailSuccess
} from "./getVideoDetail.action";

const _getVideoDetailReducer = createReducer(
  getVideoDetailState,
  on(getVideoDetail, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getVideoDetailSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getVideoDetailFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getVideoDetailReducer(state: any, action: any) {
  return _getVideoDetailReducer(state, action);
}
