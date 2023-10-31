import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {
  GetSubTournamentResultsActionTypes,
} from "./getSubTournamentResults.action.types";
import {GetSubTournamentResultsRequest} from "./getSubTournamentResults.request";
import {GetSubTournamentResultsModel} from "./getSubTournamentResults.model";

export const getSubTournamentResultsAction = createAction(GetSubTournamentResultsActionTypes.OnGetSubTournamentResults,props<{requestData:GetSubTournamentResultsRequest}>());
export const getSubTournamentResultsActionSuccess = createAction(GetSubTournamentResultsActionTypes.OnGetSubTournamentResultsSuccess, props<{
  responseData: ResponseData<GetSubTournamentResultsModel>
}>());
export const getSubTournamentResultsActionFailure = createAction(GetSubTournamentResultsActionTypes.OnGetSubTournamentResultsFailure, props<{ errors: any }>());
