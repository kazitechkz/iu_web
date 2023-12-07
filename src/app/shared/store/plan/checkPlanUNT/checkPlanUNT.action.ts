import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {CheckPlanUNTActionTypes} from "./checkPlanUNT.action.types";

export const checkPlanUNTAction = createAction(CheckPlanUNTActionTypes.OnCheckPlanUNT);
export const checkPlanUNTActionSuccess = createAction(CheckPlanUNTActionTypes.OnCheckPlanUNTSuccess, props<{
  responseData: ResponseData<boolean>
}>());
export const checkPlanUNTActionFailure = createAction(CheckPlanUNTActionTypes.OnCheckPlanUNTFailure, props<{ errors: any }>());
