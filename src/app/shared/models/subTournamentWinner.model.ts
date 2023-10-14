import {TournamentUser} from "./tournamentUser.model";
import {SubTournament} from "./subTournament.model";

export interface SubTournamentWinner{
  id:number,
  user_id:number,
  sub_tournament_id:number,
  user:TournamentUser|null,
  sub_tournament:SubTournament|null,
}
