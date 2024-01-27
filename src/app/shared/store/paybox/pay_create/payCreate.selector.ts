import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {PayModel} from "./pay.model";

const pay_create_state = createFeatureSelector<ResponseData<PayModel>>('payCreate');

export const payCreateSelector = createSelector(pay_create_state, (state) => {
  return state;
})
