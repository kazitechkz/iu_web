import {createReducer, on} from "@ngrx/store";
import {ratingForumState} from "./ratingForum.state";
import {
  ratingForumAction, ratingForumActionFailure, ratingForumActionSuccess,
} from "./ratingForum.action";

const _ratingForumReducer = createReducer(
  ratingForumState,
  on(ratingForumAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(ratingForumActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(ratingForumActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function ratingForumReducer(state: any, action: any) {
  return _ratingForumReducer(state, action);
}
