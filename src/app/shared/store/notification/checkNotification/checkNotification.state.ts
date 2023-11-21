import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const checkNotificationAdapter = createEntityAdapter<boolean>();

export const checkNotificationState: EntityState<boolean> = checkNotificationAdapter.getInitialState();
