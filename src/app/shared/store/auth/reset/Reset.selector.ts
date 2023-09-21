import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResetPasswordState, SendResetTokenState} from "./Reset.state";

const get_send_reset_token_state = createFeatureSelector<SendResetTokenState>('sendResetToken');

export const getSendResetTokenState = createSelector(get_send_reset_token_state, (state) => {
  return state;
})

const get_reset_password_state = createFeatureSelector<ResetPasswordState>('resetPassword');

export const getResetPasswordState = createSelector(get_reset_password_state, (state) => {
  return state;
})
