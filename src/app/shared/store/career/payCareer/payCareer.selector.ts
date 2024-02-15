import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {PayModel} from "../../paybox/pay_create/pay.model";

const pay_career_state = createFeatureSelector<ResponseData<PayModel>>('payCareer');

export const payCareerSelector = createSelector(pay_career_state, (state) => {
  return state;
})
