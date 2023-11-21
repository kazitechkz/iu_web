import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const getUnreadMessageCountAdapter = createEntityAdapter<number>();

export const getUnreadMessageCountState: EntityState<number> = getUnreadMessageCountAdapter.getInitialState();
