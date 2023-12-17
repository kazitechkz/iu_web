import {Question} from "./question.model";
import {BattleStepQuestion} from "./battleStepQuestion.model";

export interface GivenBattleQuestionModel{
  battle_id:number
  battle_step_id:number
  battle_promo_code:string
  answered_questions:number[]
  time_left_seconds:number
  questions:Question[]
  result:BattleStepQuestion[]
}
