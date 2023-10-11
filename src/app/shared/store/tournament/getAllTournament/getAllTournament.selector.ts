import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetAllTournamentModel} from "./getAllTournament.model";

const get_all_tournament_state = createFeatureSelector<ResponseData<GetAllTournamentModel>>('getAllTournament');

export const getAllTournamentSelector = createSelector(get_all_tournament_state, (state) => {
  return state;
})
