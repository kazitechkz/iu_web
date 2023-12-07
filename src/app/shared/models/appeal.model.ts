import {AppealType} from "./appealType.model";
import {Question} from "./question.model";

export interface Appeal{
  id:number
  user_id:number
  type_id:number
  question_id:number
  message:string
  status:number
  deleted_at:Date|null
  created_at:Date|null
  updated_at:Date|null
  appeal_type:AppealType|null
  question:Question|null
}
