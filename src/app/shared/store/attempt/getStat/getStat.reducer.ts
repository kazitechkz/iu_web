import {createReducer, on} from "@ngrx/store";
import {getStatState} from "./getStat.state";
import {getStatAction, getStatActionFailure, getStatActionSuccess} from "./getStat.action";

const _getStatReducer = createReducer(
  getStatState,
  on(getStatAction, (state, action) => {
    return {
      ...state,
    }
  }),
  on(getStatActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getStatActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getStatReducer(state: any, action: any) {
  return _getStatReducer(state, action);

}
