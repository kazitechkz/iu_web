import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const userCheckAdapter = createEntityAdapter<boolean>();
export const userCheckState: EntityState<boolean> = userCheckAdapter.getInitialState();
