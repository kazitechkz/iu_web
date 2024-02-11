import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {MyOrderModel} from "./myOrder.model";

export const myOrderAdapter = createEntityAdapter<MyOrderModel[]>();

export const myOrderState: EntityState<MyOrderModel[]> = myOrderAdapter.getInitialState();
