import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Subject} from "../../../models/subject.model";

const check_plan_unt_state = createFeatureSelector<ResponseData<number[]>>('checkPlanUNT');

export const checkPlanUNTSelector = createSelector(check_plan_unt_state, (state) => {
  return state;
})
