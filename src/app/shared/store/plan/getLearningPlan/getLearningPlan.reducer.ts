import {createReducer, on} from "@ngrx/store";
import {getLearningPlanState} from "./getLearningPlan.state";
import {
  getLearningPlanAction,
  getLearningPlanActionFailure,
  getLearningPlanActionSuccess
} from "./getLearningPlan.action";

const _getLearningPlanReducer = createReducer(
  getLearningPlanState,
  on(getLearningPlanAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getLearningPlanActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getLearningPlanActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getLearningPlanReducer(state: any, action: any) {
  return _getLearningPlanReducer(state, action);
}
