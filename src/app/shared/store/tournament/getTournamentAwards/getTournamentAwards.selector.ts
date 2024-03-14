import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {TournamentAward} from "../../../models/tournamentAward.model";

const get_tournament_awards_state = createFeatureSelector<ResponseData<Pagination<TournamentAward[]>>>('getTournamentAwards');

export const getTournamentAwardSelector = createSelector(get_tournament_awards_state, (state) => {
  return state;
})
