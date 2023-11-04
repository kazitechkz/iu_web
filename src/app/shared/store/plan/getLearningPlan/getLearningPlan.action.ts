import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetLearningPlanActionTypes} from "./getLearningPlan.action.types";
import {GetLearningPlanModel} from "./getLearningPlan.model";

export const getLearningPlanAction = createAction(GetLearningPlanActionTypes.OnGetAllLearningPlan);
export const getLearningPlanActionSuccess = createAction(GetLearningPlanActionTypes.OnGetAllLearningPlanSuccess, props<{
  responseData: ResponseData<GetLearningPlanModel>
}>());
export const getLearningPlanActionFailure = createAction(GetLearningPlanActionTypes.OnGetAllLearningPlanFailure, props<{ errors: any }>());
