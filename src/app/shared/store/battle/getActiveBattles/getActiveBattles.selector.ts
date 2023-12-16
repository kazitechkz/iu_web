import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {Battle} from "../../../models/battle.model";

const get_active_battles_state = createFeatureSelector<ResponseData<Pagination<Battle[]>>>('getActiveBattles');

export const getActiveBattlesSelector = createSelector(get_active_battles_state, (state) => {
  return state;
})
