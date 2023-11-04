import {createReducer, on} from "@ngrx/store";
import {getUntPlanState} from "./getUntPlan.state";
import {
  getUntPlanAction,
  getUntPlanActionFailure,
  getUntPlanActionSuccess
} from "./getUntPlan.action";

const _getUntPlanReducer = createReducer(
  getUntPlanState,
  on(getUntPlanAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getUntPlanActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getUntPlanActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getUntPlanReducer(state: any, action: any) {
  return _getUntPlanReducer(state, action);
}
