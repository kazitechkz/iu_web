import {TournamentUser} from "./tournamentUser.model";
import {SubTournament} from "./subTournament.model";

export interface SubTournamentRival{
  id:number,
  rival_one:number,
  point_one:number,
  time_one:number,
  rival_two:number,
  point_two:number,
  time_two:number,
  winner:number,
  sub_tournament_id:number,
  winner_user:TournamentUser|null,
  rival_one_user:TournamentUser|null,
  rival_two_user:TournamentUser|null,
  sub_tournament:SubTournament|null,
}
