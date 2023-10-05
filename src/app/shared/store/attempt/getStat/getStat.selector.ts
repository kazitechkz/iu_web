import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Me} from "../../../models/user.model";
import {Attempt} from "../../../models/attempt.model";

const get_stat_selector = createFeatureSelector<ResponseData<Attempt>>('getUNTStat');

export const getStatSelector = createSelector(get_stat_selector, (state) => {
  return state;
})
