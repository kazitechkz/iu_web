import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetSubTournamentDetailModel} from "./getSubTournamentDetail.model";

const get_sub_tournament_detail_state = createFeatureSelector<ResponseData<GetSubTournamentDetailModel>>('getSubTournamentDetail');

export const getSubTournamentDetailSelector = createSelector(get_sub_tournament_detail_state, (state) => {
  return state;
})
