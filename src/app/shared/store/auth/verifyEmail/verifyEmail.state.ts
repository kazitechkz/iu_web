import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const verifyAdapter = createEntityAdapter<boolean>();

export const verifyState: EntityState<boolean> = verifyAdapter.getInitialState();
