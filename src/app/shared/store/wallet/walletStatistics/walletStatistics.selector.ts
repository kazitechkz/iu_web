import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {WalletStatisticsModel} from "./walletStatistics.model";

const get_wallet_statistics_state = createFeatureSelector<ResponseData<WalletStatisticsModel>>('walletStatistics');

export const walletStatisticsSelector = createSelector(get_wallet_statistics_state, (state) => {
  return state;
})
