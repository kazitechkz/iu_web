import {createAction, props} from "@ngrx/store";
import {StatByAttemptActionTypes} from "./stat-by-attempt.action.types";
import {ResponseData} from "../../response_data";
import {StatByAttemptIdModel} from "../../stat/statByAttemptId/statByAttemptId.action.model";


export const StatExamByIdAction = createAction(StatByAttemptActionTypes.OnStatExamById, props<{attempt_id: number, user_id: number}>());
export const StatExamByIdSuccess = createAction(StatByAttemptActionTypes.OnStatExamByIdSuccess, props<{
    responseData: ResponseData<StatByAttemptIdModel>
}>());
export const StatExamByIdFailure = createAction(StatByAttemptActionTypes.OnStatExamByIdFailure, props<{ errors: any }>());

