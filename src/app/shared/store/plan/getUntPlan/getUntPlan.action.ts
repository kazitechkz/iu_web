import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetUntPlanActionTypes} from "./getUntPlan.action.types";
import {Plan} from "../../../models/plan.model";

export const getUntPlanAction = createAction(GetUntPlanActionTypes.OnGetAllUntPlan);
export const getUntPlanActionSuccess = createAction(GetUntPlanActionTypes.OnGetAllUntPlanSuccess, props<{
  responseData: ResponseData<Plan[]>
}>());
export const getUntPlanActionFailure = createAction(GetUntPlanActionTypes.OnGetAllUntPlanFailure, props<{ errors: any }>());
