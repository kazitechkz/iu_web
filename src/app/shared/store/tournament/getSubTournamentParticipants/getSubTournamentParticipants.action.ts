import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {
  GetSubTournamentParticipantsActionTypes,
} from "./getSubTournamentParticipants.action.types";
import {Pagination} from "../../pagination";
import {SubTournamentParticipant} from "../../../models/subTournamentParticipant.model";
import {GetSubTournamentParticipantsRequest} from "./getSubTournamentParticipants.request";

export const getSubTournamentParticipantsAction = createAction(GetSubTournamentParticipantsActionTypes.OnGetSubTournamentParticipants,props<{requestData:GetSubTournamentParticipantsRequest}>());
export const clearGetSubTournamentParticipantsAction = createAction(GetSubTournamentParticipantsActionTypes.OnClearGetSubTournamentParticipants);
export const getSubTournamentParticipantsActionSuccess = createAction(GetSubTournamentParticipantsActionTypes.OnGetSubTournamentParticipantsSuccess, props<{
  responseData: ResponseData<Pagination<SubTournamentParticipant[]>>
}>());
export const getSubTournamentParticipantsActionFailure = createAction(GetSubTournamentParticipantsActionTypes.OnGetSubTournamentParticipantsFailure, props<{ errors: any }>());
