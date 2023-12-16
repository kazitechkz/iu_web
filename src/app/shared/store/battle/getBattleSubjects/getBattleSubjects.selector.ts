import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {ProposeSubjectForBattleModel} from "../../../models/proposeSubjectForBattle.model";

const get_battle_subjects_state = createFeatureSelector<ResponseData<ProposeSubjectForBattleModel>>('getBattleSubjects');

export const getBattleSubjectsSelector = createSelector(get_battle_subjects_state, (state) => {
  return state;
})
