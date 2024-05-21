import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../response_data";

const utm_state = createFeatureSelector<ResponseData<number>>('utm');

export const utmSelector = createSelector(utm_state, (state) => {
  return state;
})
