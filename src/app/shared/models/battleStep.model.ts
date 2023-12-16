import {Subject} from "./subject.model";
import {OrdinaryUser} from "./user.model";
import {BattleStepQuestion} from "./battleStepQuestion.model";
import {BattleStepResult} from "./battleStepResult.model";

export interface BattleStep{
  id:number
  promo_code:string
  battle_id:number
  subject_id:number|null
  current_user:number
  is_finished:boolean
  is_current:boolean
  order:number
  is_last:number
  created_at: Date
  updated_at: Date|null
  subject:Subject|null
  currentUser:OrdinaryUser|null
  battle_step_questions:BattleStepQuestion[]|null
  battle_step_results:BattleStepResult[]|null
}
