import {createReducer, on} from "@ngrx/store";
import {getAllVideosState} from "./getAllVideos.state";
import {getAllVideosAction, getAllVideosActionFailure, getAllVideosActionSuccess} from "./getAllVideos.action";

const _getAllVideosReducer = createReducer(
  getAllVideosState,
  on(getAllVideosAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getAllVideosActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getAllVideosActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getAllVideosReducer(state: any, action: any) {
  return _getAllVideosReducer(state, action);
}
