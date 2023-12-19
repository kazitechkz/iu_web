import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Battle} from "../../../models/battle.model";

const my_active_battles_state = createFeatureSelector<ResponseData<Battle[]>>('myActiveBattles');

export const myActiveBattlesSelector = createSelector(my_active_battles_state, (state) => {
  return state;
})
