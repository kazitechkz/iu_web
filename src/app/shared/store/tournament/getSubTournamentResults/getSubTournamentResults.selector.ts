import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetSubTournamentResultsModel} from "./getSubTournamentResults.model";
import {Pagination} from "../../pagination";
import {SubTournamentResult} from "../../../models/subTournamentResult.model";

const get_sub_tournament_results_state = createFeatureSelector<ResponseData<Pagination<SubTournamentResult[]>>>('getSubTournamentResults');

export const getSubTournamentResultsSelector = createSelector(get_sub_tournament_results_state, (state) => {
  return state;
})
