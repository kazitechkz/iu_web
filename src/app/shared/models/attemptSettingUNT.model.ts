import {Locale} from "./locale.model";
import {OrdinaryUser} from "./user.model";
import {ClassroomsGroupModel} from "./classroomsGroup.model";

export interface AttemptSettingUNT{
  id:number
  promo_code:string
  locale_id:number
  sender_id:number
  class_id:number|null
  users : number[] | null
  subjects : number[]|null,
  settings :string
  time:number
  hidden_fields:string
  created_at: Date
  updated_at: Date | null
  locale: Locale | null
  sender: OrdinaryUser | null
  classroom_group: ClassroomsGroupModel | null
  // attempt_settings_results_unts
}
