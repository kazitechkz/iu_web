import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {StatByAttemptIdActionTypes} from "./statByAttemptId.action.types";
import {StatByAttemptIdModel} from "./statByAttemptId.action.model";


export const statByAttemptIdAction = createAction(StatByAttemptIdActionTypes.OnGetStatByAttemptId, props<{
  requestData: number
}>());
export const StatByAttemptIdSuccessAction = createAction(StatByAttemptIdActionTypes.OnGetStatByAttemptIdSuccess, props<{
  responseData: ResponseData<StatByAttemptIdModel>
}>());
export const StatByAttemptIdFailureAction = createAction(StatByAttemptIdActionTypes.OnGetStatByAttemptIdFailure, props<{ errors: any }>());
