export interface AttemptQuestion{
  id: number
  attempt_subject_id: number
  question_id: number
  point: number
  is_right: boolean
  user_answer: string
  is_answered: boolean
  is_skipped: boolean
  created_at: string
  updated_at: string
}
