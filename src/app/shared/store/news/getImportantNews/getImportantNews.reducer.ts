import {createReducer, on} from "@ngrx/store";
import {getImportantNewsState} from "./getImportantNews.state";
import {
  getImportantNewsAction, getForumActionSuccess, getForumActionFailure,
} from "./getImportantNews.action";

const _getForumReducer = createReducer(
  getImportantNewsState,
  on(getImportantNewsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getForumActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getForumActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getImportantNewsReducer(state: any, action: any) {
  return _getForumReducer(state, action);
}
