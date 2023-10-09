import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Attempt} from "../../../models/attempt.model";
import {AllAttemptActionTypes} from "./allAttempt.action.types";
import {AllAttemptRequest} from "./allAttempt.request";
import {Pagination} from "../../pagination";

export const allAttemptAction = createAction(AllAttemptActionTypes.OnAllAttempt,props<{requestData:AllAttemptRequest}>());
export const allAttemptActionSuccess = createAction(AllAttemptActionTypes.OnAllAttemptSuccess, props<{
  responseData: ResponseData<Pagination<Attempt>>
}>());
export const allAttemptActionFailure = createAction(AllAttemptActionTypes.OnAllAttemptFailure, props<{ errors: any }>());
