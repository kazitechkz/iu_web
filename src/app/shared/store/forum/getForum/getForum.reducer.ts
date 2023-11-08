import {createReducer, on} from "@ngrx/store";
import {getForumState} from "./getForum.state";
import {
  getForumAction, getForumActionSuccess, getForumActionFailure,
} from "./getForum.action";

const _getForumReducer = createReducer(
  getForumState,
  on(getForumAction, (state, action) => {
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

export function getForumReducer(state: any, action: any) {
  return _getForumReducer(state, action);
}
