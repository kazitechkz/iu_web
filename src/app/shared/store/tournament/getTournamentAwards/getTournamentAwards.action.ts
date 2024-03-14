import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {GetTournamentAwardsRequest} from "./getTournamentAwards.request";
import {GetTournamentAwardsActionTypes} from "./getTournamentAwards.action.types";
import {TournamentAward} from "../../../models/tournamentAward.model";

export const getTournamentAwardsAction = createAction(GetTournamentAwardsActionTypes.OnGetGetTournamentAwards,props<{requestData:GetTournamentAwardsRequest}>());
export const clearGetTournamentAwardsAction = createAction(GetTournamentAwardsActionTypes.OnClearGetTournamentAwards);
export const getTournamentAwardsActionSuccess = createAction(GetTournamentAwardsActionTypes.OnGetTournamentAwardsSuccess, props<{
  responseData: ResponseData<Pagination<TournamentAward[]>>
}>());
export const getTournamentAwardsActionFailure = createAction(GetTournamentAwardsActionTypes.OnGetTournamentAwardsFailure, props<{ errors: any }>());
