export interface BattleAnswerResultModel{
  is_right:boolean
  point:number
  question_id:number
  battle_id:number
  battle_step_id:number
  given_answer:string
  correct_answer:string
  is_finished:boolean
  next_step_id:number|null
}
