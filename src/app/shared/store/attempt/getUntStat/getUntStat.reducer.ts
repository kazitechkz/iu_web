import {createReducer, on} from "@ngrx/store";
import {getUntStatState} from "./getUntStat.state";
import {getUntStatAction, getUntStatActionFailure, getUntStatActionSuccess} from "./getUntStat.action";

const _getUntStatReducer = createReducer(
  getUntStatState,
  on(getUntStatAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getUntStatActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getUntStatActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getUntStatReducer(state: any, action: any) {
  return _getUntStatReducer(state, action);

}
