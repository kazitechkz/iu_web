import {ClassroomsGroupModel} from "./classroomsGroup.model";

export interface ClassroomModel {
  id: number
  student_id: number
  class_id: number
  user_count: number
  classroom_group: ClassroomsGroupModel
}
