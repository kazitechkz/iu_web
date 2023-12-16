import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Battle} from "../../../models/battle.model";

const get_battle_by_promo_state = createFeatureSelector<ResponseData<Battle>>('getBattleByPromo');

export const getBattleByPromoSelector = createSelector(get_battle_by_promo_state, (state) => {
  return state;
})
