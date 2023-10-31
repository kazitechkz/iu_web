import {SubTournamentResult} from "../../../models/subTournamentResult.model";
import {Pagination} from "../../pagination";

export interface GetSubTournamentResultsModel{
  results:Pagination<SubTournamentResult[]>,
  my_result:SubTournamentResult,
}
