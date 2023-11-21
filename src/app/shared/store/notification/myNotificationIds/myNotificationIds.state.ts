import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const myNotificationIdsAdapter = createEntityAdapter<number[]>();

export const myNotificationIdsState: EntityState<number[]> = myNotificationIdsAdapter.getInitialState();
