import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetStateModel} from "./getState.model";

const get_stat_selector = createFeatureSelector<ResponseData<GetStateModel>>('getUNTStat');

export const getStatSelector = createSelector(get_stat_selector, (state) => {
  return state;
})
