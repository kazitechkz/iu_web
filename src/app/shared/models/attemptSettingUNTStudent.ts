import {Subject} from "./subject.model";

export interface AttemptSettingUNTStudent{
  id: number
  promo_code: string
  locale_id: number
  sender_id: number
  class_id: any
  users: number[]
  subjects: Subject[]|null
  settings: any
  time: number
  created_at: Date
  updated_at: Date|null
}
