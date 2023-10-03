import {Action, createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {SubStepModel} from "../../../models/subStep.model";
import {SubStepActionTypes} from "./subStep.action.types";
import {SubStepRequest} from "./subStep.request";

export const subStepAction = createAction(SubStepActionTypes.OnSubStep, props<{ requestData: number }>());
export const subStepActionSuccess = createAction(SubStepActionTypes.OnSubStepSuccess, props<{
    responseData: ResponseData<SubStepModel[]>
}>());
export const subStepActionFailure = createAction(SubStepActionTypes.OnSubStepFailure, props<{ errors: any }>());

export const subStepDetailAction = createAction(SubStepActionTypes.OnSubStepDetail, props<{ requestData: SubStepRequest}>());
export const subStepDetailActionSuccess = createAction(SubStepActionTypes.OnSubStepDetailSuccess, props<{
  responseData: ResponseData<SubStepModel>
}>());
export const subStepDetailActionFailure = createAction(SubStepActionTypes.OnSubStepDetailFailure, props<{ errors: any }>());
