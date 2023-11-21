import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {NotificationModel} from "../../../models/notification.model";

export const getNotificationAllAdapter = createEntityAdapter<Pagination<NotificationModel>>();

export const getNotificationAllState: EntityState<Pagination<NotificationModel>> = getNotificationAllAdapter.getInitialState();
