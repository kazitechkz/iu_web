import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetSubTournamentResultsModel} from "./getSubTournamentResults.model";

const get_sub_tournament_results_state = createFeatureSelector<ResponseData<GetSubTournamentResultsModel>>('getSubTournamentResults');

export const getSubTournamentResultsSelector = createSelector(get_sub_tournament_results_state, (state) => {
  return state;
})
