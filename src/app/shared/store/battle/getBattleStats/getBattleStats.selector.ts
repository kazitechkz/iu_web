import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetBattleStatsModel} from "./getBattleStats.model";

const get_battle_stats_state = createFeatureSelector<ResponseData<GetBattleStatsModel>>('getBattleStats');

export const getBattleStatsSelector = createSelector(get_battle_stats_state, (state) => {
  return state;
})
