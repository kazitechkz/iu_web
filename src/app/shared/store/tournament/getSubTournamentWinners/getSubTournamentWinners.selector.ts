import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {SubTournamentParticipant} from "../../../models/subTournamentParticipant.model";
import {SubTournamentWinner} from "../../../models/subTournamentWinner.model";

const get_sub_tournament_winners_state = createFeatureSelector<ResponseData<SubTournamentWinner[]>>('getSubTournamentWinners');

export const getSubTournamentWinnersSelector = createSelector(get_sub_tournament_winners_state, (state) => {
  return state;
})
