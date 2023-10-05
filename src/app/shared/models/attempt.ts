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
  deleted_at: Date|null
  created_at: Date
  updated_at: Date|null

}
