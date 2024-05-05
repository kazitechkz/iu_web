import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {WithdrawModel} from "./withdraw.model";

const get_withdraw_state = createFeatureSelector<ResponseData<WithdrawModel[]>>('withdraw');
export const withdrawSelector = createSelector(get_withdraw_state, (state) => {
  return state;
})
const request_withdraw_state = createFeatureSelector<ResponseData<boolean>>('requestWithdraw');
export const requestWithdrawSelector = createSelector(request_withdraw_state, (state) => {
  return state;
})
