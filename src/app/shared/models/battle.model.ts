import {Locale} from "./locale.model";
import {OrdinaryUser} from "./user.model";
import {BattleStep} from "./battleStep.model";

export interface Battle{
  id:number
  promo_code:string
  pass_code:string|null
  price:number
  owner_id:number
  guest_id:number|null
  winner_id: null
  locale_id: number
  owner_point: number
  guest_point: number
  is_open: boolean
  is_finished: boolean
  time_left_seconds:number
  start_at: Date
  end_at: Date|null
  must_finished_at: Date|null
  created_at: Date
  updated_at: Date|null
  locale:Locale|null
  owner:OrdinaryUser|null
  guest:OrdinaryUser|null
  winner:OrdinaryUser|null
  battle_steps:BattleStep[]|null
}
