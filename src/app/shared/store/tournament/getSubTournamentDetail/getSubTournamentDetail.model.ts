import {Tournament} from "../../../models/tournament.model";
import {SubTournament} from "../../../models/subTournament.model";
import {SubTournamentResult} from "../../../models/subTournamentResult.model";

export interface GetSubTournamentDetailModel {
  tournament:Tournament,
  sub_tournament_ids:number[],
  sub_tournament:SubTournament,
  my_result:SubTournamentResult,
}
