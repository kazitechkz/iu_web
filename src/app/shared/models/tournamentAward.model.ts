import {OrdinaryUser} from "./user.model";

export interface TournamentAward{
  id:number
  title_ru:string
  title_kk:string
  title_en : string|null
  is_awarded : boolean
  tournament_id:number
  sub_tournament_id:number
  user_id:number
  order:number
  user:OrdinaryUser|null
}
