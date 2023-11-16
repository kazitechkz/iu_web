import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {WalletStatisticsActionTypes} from "./walletStatistics.action.types";
import {WalletStatisticsModel} from "./walletStatistics.model";
import {WalletStatisticsRequest} from "./walletStatistics.request";

export const walletStatisticsAction = createAction(WalletStatisticsActionTypes.WalletStatistics,props<{
  requestDate: WalletStatisticsRequest
}>());
export const walletStatisticsActionSuccess = createAction(WalletStatisticsActionTypes.WalletStatisticsSuccess, props<{
  responseData: ResponseData<WalletStatisticsModel>
}>());
export const walletStatisticsActionFailure = createAction(WalletStatisticsActionTypes.WalletStatisticsFailure, props<{ errors: any }>());
