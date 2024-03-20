import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Wallet} from "../../../models/wallet.model";
import {Pagination} from "../../pagination";
import {WalletRatingModel} from "./walletRating.model";

const get_wallet_rating_state = createFeatureSelector<ResponseData<WalletRatingModel>>('walletRating');

export const walletRatingSelector = createSelector(get_wallet_rating_state, (state) => {
  return state;
})
