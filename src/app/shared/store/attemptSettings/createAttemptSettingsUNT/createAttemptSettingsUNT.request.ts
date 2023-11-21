export interface CreateAttemptSettingsUNTRequest {
  settings:string|null
  locale_id:number
  subjects:number[]
  time:number
  hidden_fields:string|null
  users:number[]|null
  class_id:number|null
}

export interface CreateAttemptSettingsUNTRequestData {
  data: string
}
