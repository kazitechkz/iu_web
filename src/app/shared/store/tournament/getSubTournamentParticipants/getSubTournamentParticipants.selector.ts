import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {SubTournamentParticipant} from "../../../models/subTournamentParticipant.model";

const get_sub_tournament_participants_state = createFeatureSelector<ResponseData<Pagination<SubTournamentParticipant[]>>>('getSubTournamentParticipants');

export const getSubTournamentParticipantsSelector = createSelector(get_sub_tournament_participants_state, (state) => {
  return state;
})
