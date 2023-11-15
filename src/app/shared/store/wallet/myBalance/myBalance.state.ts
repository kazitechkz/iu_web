import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const myBalanceAdapter = createEntityAdapter<number>();

export const myBalanceState: EntityState<number> = myBalanceAdapter.getInitialState();
