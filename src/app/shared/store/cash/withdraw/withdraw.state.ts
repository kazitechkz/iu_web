import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {WithdrawModel} from "./withdraw.model";

export const withdrawAdapter = createEntityAdapter<WithdrawModel[]>();

export const withdrawState: EntityState<WithdrawModel[]> = withdrawAdapter.getInitialState();
export const requestWithdrawAdapter = createEntityAdapter<boolean>();

export const requestWithdrawState: EntityState<boolean> = requestWithdrawAdapter.getInitialState();
