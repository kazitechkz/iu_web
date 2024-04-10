import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {
  GetSubTournamentResultsActionTypes,
} from "./getSubTournamentResults.action.types";
import {GetSubTournamentResultsRequest} from "./getSubTournamentResults.request";
import {GetSubTournamentResultsModel} from "./getSubTournamentResults.model";
import {Pagination} from "../../pagination";
import {SubTournamentResult} from "../../../models/subTournamentResult.model";

export const getSubTournamentResultsAction = createAction(GetSubTournamentResultsActionTypes.OnGetSubTournamentResults,props<{requestData:GetSubTournamentResultsRequest}>());
export const getSubTournamentResultsActionSuccess = createAction(GetSubTournamentResultsActionTypes.OnGetSubTournamentResultsSuccess, props<{
  responseData: ResponseData<Pagination<SubTournamentResult[]>>
}>());
export const getSubTournamentResultsActionFailure = createAction(GetSubTournamentResultsActionTypes.OnGetSubTournamentResultsFailure, props<{ errors: any }>());
