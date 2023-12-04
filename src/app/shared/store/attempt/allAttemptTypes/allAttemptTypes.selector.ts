import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {AttemptType} from "../../../models/attemptType.model";

const all_attempt_types_selector = createFeatureSelector<ResponseData<AttemptType[]>>('allAttemptTypes');

export const allAttemptTypesSelector = createSelector(all_attempt_types_selector, (state) => {
  return state;
})
