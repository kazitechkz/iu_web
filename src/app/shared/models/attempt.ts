import {AttemptType} from "./attemptType.model";
import {Locale} from "./locale.model";
import {Subject} from "./subject.model";

export interface AttemptModel{
  id: number
  type_id: number
  user_id: number
  locale_id: number
  start_at: Date
  end_at: Date|null
  max_points: number
  points: number
  time: number
  time_left: number
  attempt_type:AttemptType|null
  subjects:Subject[]|null
  locale:Locale|null
  deleted_at: Date|null
  created_at: Date
  updated_at: Date|null
}
