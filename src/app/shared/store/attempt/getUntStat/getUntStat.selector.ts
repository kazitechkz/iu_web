import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {UntStatModel} from "../../../models/untStat.model";

const get_unt_stat_selector = createFeatureSelector<ResponseData<UntStatModel>>('untTotalStat');

export const getUntStatSelector = createSelector(get_unt_stat_selector, (state) => {
  return state;
})
