import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {WithdrawActionTypes} from "./withdraw.action.types";
import {WithdrawModel} from "./withdraw.model";
import {WithdrawRequest} from "./withdraw.request";

export const withdrawAction = createAction(WithdrawActionTypes.Withdraw);
export const withdrawActionSuccess = createAction(WithdrawActionTypes.WithdrawSuccess, props<{
  responseData: ResponseData<WithdrawModel[]>
}>());
export const withdrawActionFailure = createAction(WithdrawActionTypes.WithdrawFailure, props<{
  errors: any
}>());

export const requestWithdrawAction = createAction(WithdrawActionTypes.RequestWithdraw, props<{req: WithdrawRequest}>());
export const requestWithdrawActionSuccess = createAction(WithdrawActionTypes.RequestWithdrawSuccess, props<{
  responseData: ResponseData<boolean>
}>());
export const requestWithdrawActionFailure = createAction(WithdrawActionTypes.RequestWithdrawFailure, props<{
  errors: any
}>());
