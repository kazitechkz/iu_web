import {Question} from "./question.model";

export interface GivenBattleQuestionModel{
  battle_step_id:number
  answered_questions:number[]
  time_left_seconds:number
  questions:Question[]
}
