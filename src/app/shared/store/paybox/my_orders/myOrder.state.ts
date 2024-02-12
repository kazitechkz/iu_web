import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {MyOrderModel} from "./myOrder.model";
import {Pagination} from "../../pagination";

export const myOrderAdapter = createEntityAdapter<Pagination<MyOrderModel[]>>();

export const myOrderState: EntityState<Pagination<MyOrderModel[]>> = myOrderAdapter.getInitialState();
