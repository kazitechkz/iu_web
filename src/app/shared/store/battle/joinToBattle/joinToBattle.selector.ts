import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Battle} from "../../../models/battle.model";

const join_to_battle_state = createFeatureSelector<ResponseData<Battle>>('joinToBattle');

export const joinToBattleSelector = createSelector(join_to_battle_state, (state) => {
  return state;
})
