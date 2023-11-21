import {OrdinaryUser} from "./user.model";
import {NotificationType} from "./notificationType.model";

export interface Notification {
  id: number
  type_id: number
  class_id: any
  owner_id: number
  users: number[]
  title: string
  message: string
  created_at: string
  updated_at: string
  owner: OrdinaryUser|null
  notification_type: NotificationType|null
}
