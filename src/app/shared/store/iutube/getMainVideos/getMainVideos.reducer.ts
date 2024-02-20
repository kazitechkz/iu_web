import {createReducer, on} from "@ngrx/store";
import {getMainVideosState} from "./getMainVideos.state";
import {getMainVideosAction, getMainVideosActionFailure, getMainVideosActionSuccess} from "./getMainVideos.action";

const _getMainVideosReducer = createReducer(
  getMainVideosState,
  on(getMainVideosAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getMainVideosActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getMainVideosActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getMainVideosReducer(state: any, action: any) {
  return _getMainVideosReducer(state, action);
}
