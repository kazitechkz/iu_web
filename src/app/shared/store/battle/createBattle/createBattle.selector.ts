import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Battle} from "../../../models/battle.model";

const create_battle_state = createFeatureSelector<ResponseData<Battle>>('createBattle');

export const createBattleSelector = createSelector(create_battle_state, (state) => {
  return state;
})
