import {AnswerActionTypes} from "./answer.action.types";
import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {AnswerResult} from "../../../models/answerResult.model";
import {AnswerRequest} from "./answer.request";


export const createAnswerAction = createAction(AnswerActionTypes.OnAnswer,props<{requestData:AnswerRequest}>());
export const createAnswerActionSuccess = createAction(AnswerActionTypes.OnAnswerSuccess, props<{
  responseData: ResponseData<AnswerResult>
}>());
export const createAnswerActionFailure = createAction(AnswerActionTypes.OnAnswerFailure, props<{ errors: any }>());
