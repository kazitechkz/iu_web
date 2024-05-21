import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const UtmAdapter = createEntityAdapter<boolean>();

export const utmState: EntityState<boolean> = UtmAdapter.getInitialState();
