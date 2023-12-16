import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {ProposeSubjectForBattleModel} from "../../../models/proposeSubjectForBattle.model";
import {GivenBattleQuestionModel} from "../../../models/givenBattleQuestion.model";

const get_battle_step_state = createFeatureSelector<ResponseData<GivenBattleQuestionModel>>('getBattleStep');

export const getBattleStepSelector = createSelector(get_battle_step_state, (state) => {
  return state;
})
