import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Wallet} from "../../../models/wallet.model";

const get_my_wallet_state = createFeatureSelector<ResponseData<Wallet>>('myWallet');

export const myWalletSelector = createSelector(get_my_wallet_state, (state) => {
  return state;
})
