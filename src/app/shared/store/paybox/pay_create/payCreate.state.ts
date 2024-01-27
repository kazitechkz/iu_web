import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Plan} from "../../../models/plan.model";
import {PayModel} from "./pay.model";

export const payCreateAdapter = createEntityAdapter<PayModel>();

export const payCreateState: EntityState<PayModel> = payCreateAdapter.getInitialState();
