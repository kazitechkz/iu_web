import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";

const get_wallet_transfer_state = createFeatureSelector<ResponseData<boolean>>('walletTransfer');

export const walletTransferSelector = createSelector(get_wallet_transfer_state, (state) => {
  return state;
})
