import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {MyOrderModel} from "./myOrder.model";

const my_order_state = createFeatureSelector<ResponseData<MyOrderModel[]>>('myOrder');

export const myOrderSelector = createSelector(my_order_state, (state) => {
  return state;
})
