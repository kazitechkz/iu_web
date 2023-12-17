import {OrdinaryUser} from "./user.model";
import {BattleStep} from "./battleStep.model";

export interface BattleStepQuestion {
  id:number
  step_id:number
  question_id:number
  user_id:number
  answer:string|null
  right_answer:string|null
  is_right:boolean
  is_answered:boolean
  point:boolean
  created_at: Date
  updated_at: Date|null
  user:OrdinaryUser|null
  battle_step:BattleStep|null
}
