import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";

const get_send_reset_token_state = createFeatureSelector<ResponseData<boolean>>('sendResetToken');

export const getSendResetTokenState = createSelector(get_send_reset_token_state, (state) => {
  return state;
})

const get_reset_password_state = createFeatureSelector<ResponseData<boolean>>('resetPassword');

export const getResetPasswordState = createSelector(get_reset_password_state, (state) => {
  return state;
})
