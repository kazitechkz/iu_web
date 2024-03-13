import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {PassSubStepActionTypes} from "./passSubStep.action.types";
import {PassSubStepRequest} from "./passSubStep.request";
import {SubStepModel} from "../../../models/subStep.model";


export const PassSubStepAction = createAction(PassSubStepActionTypes.OnPassSubStep, props<{
  requestData: PassSubStepRequest
}>());
export const PassSubStepClearAction = createAction(PassSubStepActionTypes.OnPassSubStepClear);
export const PassSubStepSuccessAction = createAction(PassSubStepActionTypes.OnPassSubStepSuccess, props<{
  responseData: ResponseData<SubStepModel[]>
}>());
export const PassSubStepFailureAction = createAction(PassSubStepActionTypes.OnPassSubStepFailure, props<{ errors: any }>());
