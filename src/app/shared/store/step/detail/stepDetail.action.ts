import {Action, createAction, props} from "@ngrx/store";
import {StepDetailActionTypes} from "./stepDetail.action.types";
import {ResponseData} from "../../response_data";
import {StepModel, Steps} from "../../../models/step.model";
import {LoginRequest} from "../../auth/login/loginRequest";
import {StepDetailRequest} from "./stepDetail.request";

export const stepDetailAction = createAction(StepDetailActionTypes.OnStepDetail, props<{ requestData: StepDetailRequest }>());
export const stepDetailActionSuccess = createAction(StepDetailActionTypes.OnStepDetailSuccess, props<{
    responseData: ResponseData<Steps[]>
}>());
export const stepDetailActionFailure = createAction(StepDetailActionTypes.OnStepDetailFailure, props<{ errors: any }>());
