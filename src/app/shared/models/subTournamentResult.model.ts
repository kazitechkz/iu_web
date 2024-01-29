import {SubTournament} from "./subTournament.model";
import {TournamentUser} from "./tournamentUser.model";

export interface SubTournamentResult{
  id:number,
  user_id:number,
  sub_tournament_id:number,
  point:number|null,
  time:number|null,
  attempt_id:number,
  sub_tournament:SubTournament|null,
  user:TournamentUser|null


}
