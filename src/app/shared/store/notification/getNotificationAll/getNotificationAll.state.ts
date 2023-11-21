import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";

export const getNotificationAllAdapter = createEntityAdapter<Pagination<Notification>>();

export const getNotificationAllState: EntityState<Pagination<Notification>> = getNotificationAllAdapter.getInitialState();
