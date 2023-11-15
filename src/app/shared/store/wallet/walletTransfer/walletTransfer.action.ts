import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {WalletTransferActionTypes} from "./walletTransfer.action.types";
import {WalletTransferRequest} from "./walletTransfer.request";

export const walletTransferAction = createAction(WalletTransferActionTypes.WalletTransfer,props<{
  requestData: WalletTransferRequest
}>());
export const walletTransferActionSuccess = createAction(WalletTransferActionTypes.WalletTransferSuccess, props<{
  responseData: ResponseData<boolean>
}>());
export const walletTransferActionFailure = createAction(WalletTransferActionTypes.WalletTransferFailure, props<{ errors: any }>());
