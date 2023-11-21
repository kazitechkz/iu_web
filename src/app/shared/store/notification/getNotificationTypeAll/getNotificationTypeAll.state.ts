import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {NotificationType} from "../../../models/notificationType.model";

export const getNotificationTypeAllAdapter = createEntityAdapter<NotificationType[]>();

export const getNotificationTypeAllState: EntityState<NotificationType[]> = getNotificationTypeAllAdapter.getInitialState();
