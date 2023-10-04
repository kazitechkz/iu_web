import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";

const create_appeal_selector = createFeatureSelector<ResponseData<boolean>>('createAppeal');

export const createAppealSelector = createSelector(create_appeal_selector, (state) => {
  return state;
})
