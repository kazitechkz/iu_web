import {createReducer, on} from "@ngrx/store";
import {getForumDiscussState} from "./getForumDiscuss.state";
import {
  getForumDiscussAction, getForumDiscussActionSuccess, getForumDiscussActionFailure,
} from "./getForumDiscuss.action";

const _getForumDiscussReducer = createReducer(
  getForumDiscussState,
  on(getForumDiscussAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getForumDiscussActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getForumDiscussActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getForumDiscussReducer(state: any, action: any) {
  return _getForumDiscussReducer(state, action);
}
