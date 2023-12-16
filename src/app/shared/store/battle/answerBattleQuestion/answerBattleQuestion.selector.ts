import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {BattleAnswerResultModel} from "../../../models/battleAnswerResult.model";

const answer_battle_question_state = createFeatureSelector<ResponseData<BattleAnswerResultModel>>('answerBattleQuestion');

export const answerBattleQuestionSelector = createSelector(answer_battle_question_state, (state) => {
  return state;
})
