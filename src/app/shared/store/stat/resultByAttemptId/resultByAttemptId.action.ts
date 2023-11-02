import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {ResultByAttemptIdActionTypes} from "./resultByAttemptId.action.types";
import {ResultByAttemptIdModel} from "./resultByAttemptId.action.model";


export const resultByAttemptIdAction = createAction(ResultByAttemptIdActionTypes.OnGetResultByAttemptId, props<{
  requestData: number
}>());
export const resultByAttemptIdSuccessAction = createAction(ResultByAttemptIdActionTypes.OnGetResultByAttemptIdSuccess, props<{
  responseData: ResponseData<ResultByAttemptIdModel>
}>());
export const resultByAttemptIdFailureAction = createAction(ResultByAttemptIdActionTypes.OnGetResultByAttemptIdFailure, props<{ errors: any }>());
