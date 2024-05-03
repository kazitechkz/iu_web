import {createReducer, on} from "@ngrx/store";
import {
  refsAction,
  refsActionSuccess,
  refsActionFailure,
} from "./refs.action";
import {refsState} from "./refs.state";


const _RefsRatingReducer = createReducer(
  refsState,
  on(refsAction, (state, action) => {
    return {
      ...state
    }
  }),
  on(refsActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(refsActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function refsReducer(state: any, action: any) {
  return _RefsRatingReducer(state, action);
}
