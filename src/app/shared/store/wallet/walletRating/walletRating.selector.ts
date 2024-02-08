import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Wallet} from "../../../models/wallet.model";
import {Pagination} from "../../pagination";

const get_wallet_rating_state = createFeatureSelector<ResponseData<Pagination<Wallet[]>>>('walletRating');

export const walletRatingSelector = createSelector(get_wallet_rating_state, (state) => {
  return state;
})
