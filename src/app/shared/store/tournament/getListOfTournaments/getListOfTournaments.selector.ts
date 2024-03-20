import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {Tournament} from "../../../models/tournament.model";

const get_list_of_tournaments_state = createFeatureSelector<ResponseData<Pagination<Tournament[]>>>('getListOfTournaments');

export const getListOfTournamentsSelector = createSelector(get_list_of_tournaments_state, (state) => {
  return state;
})
