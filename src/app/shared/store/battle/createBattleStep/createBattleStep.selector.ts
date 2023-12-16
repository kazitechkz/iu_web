import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GivenBattleQuestionModel} from "../../../models/givenBattleQuestion.model";

const create_battle_step_state = createFeatureSelector<ResponseData<GivenBattleQuestionModel>>('createBattleStep');

export const createBattleStepSelector = createSelector(create_battle_step_state, (state) => {
  return state;
})
