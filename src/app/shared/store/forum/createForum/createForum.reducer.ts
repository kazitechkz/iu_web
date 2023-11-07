import {createReducer, on} from "@ngrx/store";
import {createForumState} from "./createForum.state";
import {
  createForumAction,
  createForumActionFailure,
  createForumActionSuccess
} from "./createForum.action";

const _createForumReducer = createReducer(
  createForumState,
  on(createForumAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(createForumActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(createForumActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function createForumReducer(state: any, action: any) {
  return _createForumReducer(state, action);
}
