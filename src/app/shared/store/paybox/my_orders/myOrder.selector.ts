import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {MyOrderModel} from "./myOrder.model";
import {Pagination} from "../../pagination";

const my_order_state = createFeatureSelector<ResponseData<Pagination<MyOrderModel[]>>>('myOrder');

export const myOrderSelector = createSelector(my_order_state, (state) => {
  return state;
})
