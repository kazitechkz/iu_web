import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Plan} from "../../../models/plan.model";

const get_unt_plan_state = createFeatureSelector<ResponseData<Plan[]>>('getUntPlan');

export const getUntPlanSelector = createSelector(get_unt_plan_state, (state) => {
  return state;
})
