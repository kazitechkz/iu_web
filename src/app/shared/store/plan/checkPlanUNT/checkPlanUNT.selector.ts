import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";

const check_plan_unt_state = createFeatureSelector<ResponseData<boolean>>('checkPlanUNT');

export const checkPlanUNTSelector = createSelector(check_plan_unt_state, (state) => {
  return state;
})
