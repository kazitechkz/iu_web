import {createReducer, on} from "@ngrx/store";
import {getImportantNewsState} from "./getImportantNews.state";
import {
  getImportantNewsAction, getImportantNewsActionSuccess, getImportantNewsActionFailure,
} from "./getImportantNews.action";

const _getImportantNewsReducer = createReducer(
  getImportantNewsState,
  on(getImportantNewsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getImportantNewsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getImportantNewsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getImportantNewsReducer(state: any, action: any) {
  return _getImportantNewsReducer(state, action);
}
