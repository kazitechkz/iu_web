import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {MyBalanceActionTypes} from "./myBalance.action.types";

export const myBalanceAction = createAction(MyBalanceActionTypes.MyBalance);
export const myBalanceActionSuccess = createAction(MyBalanceActionTypes.MyBalanceSuccess, props<{
  responseData: ResponseData<number>
}>());
export const myBalanceActionFailure = createAction(MyBalanceActionTypes.MyBalanceFailure, props<{ errors: any }>());
