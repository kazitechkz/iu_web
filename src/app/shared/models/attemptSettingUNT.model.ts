import {Locale} from "./locale.model";
import {OrdinaryUser, OrdinaryUserForExam} from "./user.model";
import {ClassroomsGroupModel} from "./classroomsGroup.model";
import {Subject} from "./subject.model";
import {AttemptSettingUNTResult} from "./attemptSettingResult.model";

export interface AttemptSettingUNT{
  id:number
  promo_code:string
  locale_id:number
  sender_id:number
  class_id:number|null
  users : number[] | null
  subjects : Subject[],
  settings :string
  time:number
  hidden_fields:string
  created_at: Date
  updated_at: Date | null
  locale: Locale | null
  sender: OrdinaryUser | null
  classroom_group: ClassroomsGroupModel | null
  attempt_settings_results_unt: AttemptSettingUNTResult[]
  attempt_users: string | OrdinaryUserForExam | null
}
