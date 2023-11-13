import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Attempt} from "../../../models/attempt.model";
import {AttemptModel} from "../../../models/attempt";

const get_attempt_by_promo_code_selector = createFeatureSelector<ResponseData<AttemptModel>>('getAttemptByPromoCode');

export const getAttemptByPromoCodeSelector = createSelector(get_attempt_by_promo_code_selector, (state) => {
  return state;
})
