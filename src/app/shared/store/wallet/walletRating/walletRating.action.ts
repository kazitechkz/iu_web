import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {WalletRatingActionTypes} from "./walletRating.action.types";
import {Wallet} from "../../../models/wallet.model";
import {Pagination} from "../../pagination";
import {prop} from "@rxweb/reactive-form-validators";
import {WalletRatingRequest} from "./walletRating.request";
import {WalletRatingModel} from "./walletRating.model";

export const walletRatingAction = createAction(WalletRatingActionTypes.WalletRating, props<{requestData: WalletRatingRequest}>());
export const walletRatingActionSuccess = createAction(WalletRatingActionTypes.WalletRatingSuccess, props<{
  responseData: ResponseData<WalletRatingModel>
}>());
export const walletRatingActionFailure = createAction(WalletRatingActionTypes.WalletRatingFailure, props<{
  errors: any
}>());
