import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {
  GetSubTournamentRivalsActionTypes,
} from "./getSubTournamentRivals.action.types";
import {SubTournamentRival} from "../../../models/subTournamentRival.model";
import {GetSubTournamentRivalsRequest} from "./getSubTournamentRivals.request";

export const getSubTournamentRivalsAction = createAction(GetSubTournamentRivalsActionTypes.OnGetSubTournamentRivals,props<{requestData:GetSubTournamentRivalsRequest}>());
export const getSubTournamentRivalsActionSuccess = createAction(GetSubTournamentRivalsActionTypes.OnGetSubTournamentRivalsSuccess, props<{
  responseData: ResponseData<SubTournamentRival[]>
}>());
export const getSubTournamentRivalsActionFailure = createAction(GetSubTournamentRivalsActionTypes.OnGetSubTournamentRivalsFailure, props<{ errors: any }>());
