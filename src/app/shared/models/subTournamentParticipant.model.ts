import {TournamentUser} from "./tournamentUser.model";
import {SubTournament} from "./subTournament.model";

export interface SubTournamentParticipant{
  id:number,
  user_id:number,
  sub_tournament_id:number,
  status:number,
  sub_tournament:SubTournament|null
  user:TournamentUser|null,

}
