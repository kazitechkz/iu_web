import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Me} from "../../../models/user.model";
import {Attempt} from "../../../models/attempt.model";

const get_attempt_selector = createFeatureSelector<ResponseData<Attempt>>('getAttempt');

export const getAttemptSelector = createSelector(get_attempt_selector, (state) => {
  return state;
})
