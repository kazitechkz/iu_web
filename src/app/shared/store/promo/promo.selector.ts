import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../response_data";

const get_promo_state = createFeatureSelector<ResponseData<number>>('promo');
export const getPromoStateSelector = createSelector(get_promo_state, (state) => {
  return state;
})
