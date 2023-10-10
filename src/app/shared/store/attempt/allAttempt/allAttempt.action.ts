import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {AllAttemptActionTypes} from "./allAttempt.action.types";
import {AllAttemptRequest} from "./allAttempt.request";
import {Pagination} from "../../pagination";
import {AttemptModel} from "../../../models/attempt";

export const allAttemptAction = createAction(AllAttemptActionTypes.OnAllAttempt,props<{requestData:AllAttemptRequest}>());
export const allAttemptActionSuccess = createAction(AllAttemptActionTypes.OnAllAttemptSuccess, props<{
  responseData: ResponseData<Pagination<AttemptModel[]>>
}>());
export const allAttemptActionFailure = createAction(AllAttemptActionTypes.OnAllAttemptFailure, props<{ errors: any }>());
