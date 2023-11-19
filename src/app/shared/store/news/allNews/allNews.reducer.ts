import {createReducer, on} from "@ngrx/store";
import {allNewsState} from "./allNews.state";
import {allNewsAction, allNewsActionFailure, allNewsActionSuccess} from "./allNews.action";


const _allNewsReducer = createReducer(
  allNewsState,
  on(allNewsAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(allNewsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(allNewsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function allNewsReducer(state: any, action: any) {
  return _allNewsReducer(state, action);
}
