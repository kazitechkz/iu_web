import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {Battle} from "../../../models/battle.model";

const get_battle_history_state = createFeatureSelector<ResponseData<Pagination<Battle[]>>>('getBattleHistory');

export const getBattleHistorySelector = createSelector(get_battle_history_state, (state) => {
  return state;
})
