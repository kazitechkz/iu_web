import {Tournament} from "../../../models/tournament.model";
import {TournamentStep} from "../../../models/tournamentStep.model";
import {SubTournament} from "../../../models/subTournament.model";
import {Pagination} from "../../pagination";
import {SubTournamentParticipant} from "../../../models/subTournamentParticipant.model";
import {OrdinaryUser} from "../../../models/user.model";

export interface GetTournamentDetailModel {
  tournament: Tournament,
  steps: TournamentStep[],
  is_join: boolean,
  firstSubTournament: SubTournament,
  currentSubTournament: SubTournament,
  check_access: boolean,
  is_reg: boolean,
  winner_tournament: OrdinaryUser|null
}
