import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {AnswerBattleQuestionActionTypes} from "./answerBattleQuestion.action.types";
import {AnswerBattleQuestionRequest} from "./answerBattleQuestion.request";
import {BattleAnswerResultModel} from "../../../models/battleAnswerResult.model";

export const answerBattleQuestionAction = createAction(AnswerBattleQuestionActionTypes.OnAnswerBattleQuestion,props<{requestData:AnswerBattleQuestionRequest}>());
export const answerBattleQuestionActionSuccess = createAction(AnswerBattleQuestionActionTypes.OnAnswerBattleQuestionSuccess, props<{
  responseData: ResponseData<BattleAnswerResultModel>
}>());
export const answerBattleQuestionActionFailure = createAction(AnswerBattleQuestionActionTypes.OnAnswerBattleQuestionFailure, props<{ errors: any }>());
