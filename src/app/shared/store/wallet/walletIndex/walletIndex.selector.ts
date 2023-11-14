import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {WalletIndexModel} from "./walletIndex.model";

const get_wallet_index_state = createFeatureSelector<ResponseData<WalletIndexModel>>('walletIndex');

export const walletIndexSelector = createSelector(get_wallet_index_state, (state) => {
  return state;
})
