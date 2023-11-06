import {Action, createAction, props} from "@ngrx/store";
import {StepActionTypes} from "./step.action.types";
import {ResponseData} from "../response_data";
import {StepModel} from "../../models/step.model";


export const stepAction = createAction(StepActionTypes.OnStep, props<{localeId: number}>());
export const stepActionSuccess = createAction(StepActionTypes.OnStepSuccess, props<{
    responseData: ResponseData<StepModel[]>
}>());
export const stepActionFailure = createAction(StepActionTypes.OnStepFailure, props<{ errors: any }>());
