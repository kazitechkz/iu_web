import {Me, OrdinaryUser} from "./user.model";

export interface ClassroomsGroupModel {
  id: number
  teacher_id: number
  title_kk: string
  title_ru: string
  promo_code: string
  classrooms_count: number
}

export interface DetailClassroomModel {
  id: number
  class_id: number
  user_id: number
  user: OrdinaryUser
  classroom_group: ClassroomsGroupModel
}
