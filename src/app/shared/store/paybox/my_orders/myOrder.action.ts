import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {MyOrderActionTypes} from "./myOrder.action.types";
import {MyOrderModel} from "./myOrder.model";
import {MyOrderRequest} from "./myOrder.request";

export const myOrderAction = createAction(MyOrderActionTypes.OnMyOrder);
export const MyOrderActionSuccess = createAction(MyOrderActionTypes.OnMyOrderSuccess, props<{
  responseData: ResponseData<MyOrderModel[]>
}>());
export const MyOrderActionFailure = createAction(MyOrderActionTypes.OnMyOrderFailure, props<{ errors: any }>());
