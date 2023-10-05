import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetAttemptActionTypes} from "./getAttempt.action.types";
import {Attempt} from "../../../models/attempt.model";

export const getAttemptAction = createAction(GetAttemptActionTypes.OnGetAttempt,props<{requestData:any}>());
export const getAttemptActionSuccess = createAction(GetAttemptActionTypes.OnGetAttemptSuccess, props<{
  responseData: ResponseData<Attempt>
}>());
export const getAttemptActionFailure = createAction(GetAttemptActionTypes.OnGetAttemptFailure, props<{ errors: any }>());
