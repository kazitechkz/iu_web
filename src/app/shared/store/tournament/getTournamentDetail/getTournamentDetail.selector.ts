import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetTournamentDetailModel} from "./getTournamentDetail.model";

const get_tournament_detail_state = createFeatureSelector<ResponseData<GetTournamentDetailModel>>('getTournamentDetail');

export const getTournamentDetailSelector = createSelector(get_tournament_detail_state, (state) => {
  return state;
})
