import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {
  GetSubTournamentWinnersActionTypes,
} from "./getSubTournamentWinners.action.types";
import {SubTournamentWinner} from "../../../models/subTournamentWinner.model";
import {GetSubTournamentWinnersRequest} from "./getSubTournamentWinners.request";

export const getSubTournamentWinnersAction = createAction(GetSubTournamentWinnersActionTypes.OnGetSubTournamentWinners,props<{requestData:GetSubTournamentWinnersRequest}>());
export const getSubTournamentWinnersActionSuccess = createAction(GetSubTournamentWinnersActionTypes.OnGetSubTournamentWinnersSuccess, props<{
  responseData: ResponseData<SubTournamentWinner[]>
}>());
export const getSubTournamentWinnersActionFailure = createAction(GetSubTournamentWinnersActionTypes.OnGetSubTournamentWinnersFailure, props<{ errors: any }>());
