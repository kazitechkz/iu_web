import {BattleStep} from "./battleStep.model";
import {OrdinaryUser} from "./user.model";

export interface BattleStepResult {
  id:number
  step_id:number
  answered_user:number
  start_at:Date
  end_at:Date|null
  must_finished_at:Date
  is_finished:boolean
  result:number
  created_at: Date
  updated_at: Date|null
  battle_step:BattleStep|null
  answered:OrdinaryUser
}
