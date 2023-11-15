import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";

const get_my_balance_state = createFeatureSelector<ResponseData<number>>('myBalance');

export const myBalanceSelector = createSelector(get_my_balance_state, (state) => {
  return state;
})
