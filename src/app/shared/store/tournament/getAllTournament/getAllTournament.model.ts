import {Tournament} from "../../../models/tournament.model";

export interface GetAllTournamentModel{
  open:Tournament[],
  participated:Tournament[],
  tournament_ids:number[]
}
