import {createReducer, on} from "@ngrx/store";
import {getSingleNewsState} from "./getSingleNews.state";
import {
  getSingleNewsAction, getSingleNewsActionFailure, getSingleNewsActionSuccess
} from "./getSingleNews.action";

const _getSingleNewsReducer = createReducer(
  getSingleNewsState,
  on(getSingleNewsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getSingleNewsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getSingleNewsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getSingleNewsReducer(state: any, action: any) {
  return _getSingleNewsReducer(state, action);
}
