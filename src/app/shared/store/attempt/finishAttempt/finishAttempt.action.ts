import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {FinishAttemptActionTypes} from "./finishAttempt.action.types";

export const finishAttemptAction = createAction(FinishAttemptActionTypes.OnFinishAttempt,props<{requestData:number}>());
export const finishAttemptActionSuccess = createAction(FinishAttemptActionTypes.OnFinishAttemptSuccess, props<{
  responseData: ResponseData<number>
}>());
export const finishAttemptActionFailure = createAction(FinishAttemptActionTypes.OnFinishAttemptFailure, props<{ errors: any }>());
