import {createReducer, on} from "@ngrx/store";
import {checkPlanUNTState} from "./checkPlanUNT.state";
import {
  checkPlanUNTAction,
  checkPlanUNTActionSuccess,
  checkPlanUNTActionFailure,

} from "./checkPlanUNT.action";

const _checkPlanUNTReducer = createReducer(
  checkPlanUNTState,
  on(checkPlanUNTAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(checkPlanUNTActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(checkPlanUNTActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function checkPlanUNTReducer(state: any, action: any) {
  return _checkPlanUNTReducer(state, action);
}
