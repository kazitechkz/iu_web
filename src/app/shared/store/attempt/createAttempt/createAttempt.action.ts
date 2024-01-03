import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {CreateAttemptActionTypes} from "./createAttempt.action.types";
import {Attempt} from "../../../models/attempt.model";
import {CreateAttemptRequest} from "./createAttempt.request";

export const createAttemptAction = createAction(CreateAttemptActionTypes.OnCreateAttempt,props<{requestData:CreateAttemptRequest}>());
export const createAttemptActionSuccess = createAction(CreateAttemptActionTypes.OnCreateAttemptSuccess, props<{
  responseData: ResponseData<number>
}>());
export const createAttemptActionFailure = createAction(CreateAttemptActionTypes.OnCreateAttemptFailure, props<{ errors: any }>());
