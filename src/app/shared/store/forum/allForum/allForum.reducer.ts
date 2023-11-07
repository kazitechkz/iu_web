import {createReducer, on} from "@ngrx/store";
import {allForumState} from "./allForum.state";
import {
  allForumAction, allForumActionFailure, allForumActionSuccess,
} from "./allForum.action";

const _allForumReducer = createReducer(
  allForumState,
  on(allForumAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(allForumActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(allForumActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function allForumReducer(state: any, action: any) {
  return _allForumReducer(state, action);
}
