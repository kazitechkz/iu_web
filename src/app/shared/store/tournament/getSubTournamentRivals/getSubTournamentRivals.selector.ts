import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {SubTournamentParticipant} from "../../../models/subTournamentParticipant.model";
import {SubTournamentRival} from "../../../models/subTournamentRival.model";

const get_sub_tournament_rivals_state = createFeatureSelector<ResponseData<SubTournamentRival[]>>('getSubTournamentRivals');

export const getSubTournamentRivalsSelector = createSelector(get_sub_tournament_rivals_state, (state) => {
  return state;
})
