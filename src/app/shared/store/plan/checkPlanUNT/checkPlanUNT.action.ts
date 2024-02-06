import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {CheckPlanUNTActionTypes} from "./checkPlanUNT.action.types";
import {Subject} from "../../../models/subject.model";

export const checkPlanUNTAction = createAction(CheckPlanUNTActionTypes.OnCheckPlanUNT);
export const checkPlanUNTActionSuccess = createAction(CheckPlanUNTActionTypes.OnCheckPlanUNTSuccess, props<{
  responseData: ResponseData<number[]>
}>());
export const checkPlanUNTActionFailure = createAction(CheckPlanUNTActionTypes.OnCheckPlanUNTFailure, props<{ errors: any }>());
