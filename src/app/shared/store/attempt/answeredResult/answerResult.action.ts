import {AnswerResultActionTypes} from "./answerResult.action.types";
import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {AnswerResult} from "../../../models/answerResult.model";
import {AnsweredResultRequest} from "./answerResult.request";
import {AnsweredResult} from "./answeredResult";


export const onAnsweredResultAction = createAction(AnswerResultActionTypes.OnAnswerResult,props<{requestData:AnsweredResultRequest}>());
export const onAnsweredResultActionSuccess = createAction(AnswerResultActionTypes.OnAnswerResultSuccess, props<{
  responseData: ResponseData<AnsweredResult>
}>());
export const onAnsweredResultActionFailure = createAction(AnswerResultActionTypes.OnAnswerResultFailure, props<{ errors: any }>());
export const onAnsweredResultClearAction = createAction(AnswerResultActionTypes.OnAnswerResultClear);
