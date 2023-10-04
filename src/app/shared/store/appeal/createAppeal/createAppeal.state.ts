import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const createAppealAdapter = createEntityAdapter<boolean>();

export const createAppealState: EntityState<boolean> = createAppealAdapter.getInitialState();
