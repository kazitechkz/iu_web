import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {BattleStepQuestion} from "../../../models/battleStepQuestion.model";

const get_battle_step_questions_state = createFeatureSelector<ResponseData<BattleStepQuestion[]>>('getBattleStepQuestions');

export const getBattleStepQuestionsSelector = createSelector(get_battle_step_questions_state, (state) => {
  return state;
})
