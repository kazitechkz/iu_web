import {createReducer, on} from "@ngrx/store";
import {createDiscussState} from "./createDiscuss.state";
import {
  createDiscussAction,
  createDiscussActionFailure,
  createDiscussActionSuccess,
} from "./createDiscuss.action";

const _createDiscussReducer = createReducer(
  createDiscussState,
  on(createDiscussAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(createDiscussActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(createDiscussActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function createDiscussReducer(state: any, action: any) {
  return _createDiscussReducer(state, action);
}
