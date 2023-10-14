import {Tournament} from "../../../models/tournament.model";
import {SubTournament} from "../../../models/subTournament.model";

export interface GetSubTournamentDetailModel {
  tournament:Tournament,
  tournament_ids:number[],
  sub_tournament:SubTournament,
}
