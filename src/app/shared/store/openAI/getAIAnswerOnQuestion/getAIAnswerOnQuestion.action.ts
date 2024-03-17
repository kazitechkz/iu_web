import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetAIAnswerOnQuestionActionTypes} from "./getAIAnswerOnQuestion.action.types";
import {GetAIAnswerOnQuestionRequest} from "./getAIAnswerOnQuestion.request";

export const getAIAnswerOnQuestionAction = createAction(GetAIAnswerOnQuestionActionTypes.GetAIAnswerOnQuestion,props<{requestData:GetAIAnswerOnQuestionRequest}>());
export const getAIAnswerOnQuestionActionSuccess = createAction(GetAIAnswerOnQuestionActionTypes.GetAIAnswerOnQuestionSuccess, props<{
  responseData: ResponseData<string>
}>());
export const getAIAnswerOnQuestionActionFailure = createAction(GetAIAnswerOnQuestionActionTypes.GetAIAnswerOnQuestionFailure, props<{ errors: any }>());
