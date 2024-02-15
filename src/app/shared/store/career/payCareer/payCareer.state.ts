import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {PayModel} from "../../paybox/pay_create/pay.model";

export const payCareerAdapter = createEntityAdapter<PayModel>();

export const payCareerState: EntityState<PayModel> = payCareerAdapter.getInitialState();
