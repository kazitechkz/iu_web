export interface CreateAttemptSettingsRequest {
  settings:string
  locale_id:number
  subject_id:number
  time:number
  hidden_fields:string|null
  users:number[]|null
  class_id:number|null
}
