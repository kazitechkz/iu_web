import {Tournament} from "../../../models/tournament.model";
import {TournamentStep} from "../../../models/tournamentStep.model";

export interface GetTournamentDetailModel {
  tournament:Tournament,
  steps:TournamentStep[],
  tournament_ids:number[],
  subtournament_ids:number[],
}
