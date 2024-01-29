import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {PayModel} from "./pay.model";

export const payCreateAdapter = createEntityAdapter<PayModel>();

export const payCreateState: EntityState<PayModel> = payCreateAdapter.getInitialState();
