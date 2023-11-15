import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {MyWalletActionTypes} from "./myWallet.action.types";
import {Wallet} from "../../../models/wallet.model";

export const myWalletAction = createAction(MyWalletActionTypes.MyWallet);
export const myWalletActionSuccess = createAction(MyWalletActionTypes.MyWalletSuccess, props<{
  responseData: ResponseData<Wallet>
}>());
export const myWalletActionFailure = createAction(MyWalletActionTypes.MyWalletFailure, props<{ errors: any }>());
