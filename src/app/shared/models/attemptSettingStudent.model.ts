import {OrdinaryUser} from "./user.model";
import {Subject} from "./subject.model";
import {Locale} from "./locale.model";

export interface AttemptSettingStudentModel{
  id: number
  promo_code: string
  class_id: any
  settings: string
  locale_id: number
  time: number
  hidden_fields: string
  point: number
  created_at: string
  updated_at: string
  subject_id: number
  owner_id: number
  locale:Locale|null
  users:OrdinaryUser[]|null
  owner:OrdinaryUser|null
  subject:Subject|null
}
