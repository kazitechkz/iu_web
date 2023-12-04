import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {FullStatModel} from "./fullStat.model";

const full_stat_state = createFeatureSelector<ResponseData<FullStatModel>>('fullStat');

export const fullStatSelector = createSelector(full_stat_state, (state) => {
  return state;
})
