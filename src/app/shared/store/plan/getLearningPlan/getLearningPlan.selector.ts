import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Plan} from "../../../models/plan.model";
import {GetLearningPlanModel} from "./getLearningPlan.model";

const get_learning_plan_state = createFeatureSelector<ResponseData<GetLearningPlanModel>>('getLearningPlan');

export const getLearningPlanSelector = createSelector(get_learning_plan_state, (state) => {
  return state;
})
