import {Action, createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {SubStepModel} from "../../../models/subStep.model";
import {SubStepActionTypes} from "./subStep.action.types";
import {ContentAppealRequest, SubStepRequest, SubStepResultRequest} from "./subStep.request";

export const subStepAction = createAction(SubStepActionTypes.OnSubStep, props<{ requestData: number }>());
export const subStepActionSuccess = createAction(SubStepActionTypes.OnSubStepSuccess, props<{
    responseData: ResponseData<SubStepModel[]>
}>());
export const subStepActionFailure = createAction(SubStepActionTypes.OnSubStepFailure, props<{ errors: any }>());

export const subStepDetailAction = createAction(SubStepActionTypes.OnSubStepDetail, props<{ requestData: SubStepRequest}>());
export const subStepDetailClearAction = createAction(SubStepActionTypes.OnSubStepDetailClear);
export const subStepDetailActionSuccess = createAction(SubStepActionTypes.OnSubStepDetailSuccess, props<{
  responseData: ResponseData<SubStepModel>
}>());
export const subStepDetailActionFailure = createAction(SubStepActionTypes.OnSubStepDetailFailure, props<{ errors: any }>());


export const subStepResultAction = createAction(SubStepActionTypes.OnSubStepResult, props<{ requestData: SubStepResultRequest}>());
export const subStepResultActionSuccess = createAction(SubStepActionTypes.OnSubStepResultSuccess, props<{
  responseData: ResponseData<boolean>
}>());
export const subStepResultActionFailure = createAction(SubStepActionTypes.OnSubStepResultFailure, props<{ errors: any }>());

export const contentAppealAction = createAction(SubStepActionTypes.OnContentAppeal, props<{ requestData: ContentAppealRequest}>());
export const contentAppealClear = createAction(SubStepActionTypes.OnContentAppealClear);
export const contentAppealSuccess = createAction(SubStepActionTypes.OnContentAppealSuccess, props<{
  responseData: ResponseData<boolean>
}>());
export const contentAppealFailure = createAction(SubStepActionTypes.OnContentAppealFailure, props<{ errors: any }>());
