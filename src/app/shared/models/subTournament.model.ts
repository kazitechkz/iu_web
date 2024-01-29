import {Tournament} from "./tournament.model";
import {TournamentStep} from "./tournamentStep.model";
import {SubTournamentResult} from "./subTournamentResult.model";
import {SubTournamentParticipant} from "./subTournamentParticipant.model";

export interface SubTournament{
  id:number,
  tournament_id:number,
  step_id:number,
  question_quantity:number,
  max_point:number,
  single_question_quantity:number,
  multiple_question_quantity:number,
  context_question_quantity:number,
  is_finished:boolean,
  is_current:boolean,
  time:number,
  start_at:Date,
  end_at:Date,
  tournament:Tournament|null
  tournament_step:TournamentStep|null
  sub_tournament_results: SubTournamentResult[]|null
  subtournament_participants: SubTournamentParticipant[]|null
}
