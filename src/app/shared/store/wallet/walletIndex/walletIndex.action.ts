import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {WalletIndexActionTypes} from "./walletIndex.action.types";
import {WalletIndexModel} from "./walletIndex.model";

export const walletIndexAction = createAction(WalletIndexActionTypes.WalletIndex);
export const walletIndexActionSuccess = createAction(WalletIndexActionTypes.WalletIndexSuccess, props<{
  responseData: ResponseData<WalletIndexModel>
}>());
export const walletIndexActionFailure = createAction(WalletIndexActionTypes.WalletIndexFailure, props<{ errors: any }>());
