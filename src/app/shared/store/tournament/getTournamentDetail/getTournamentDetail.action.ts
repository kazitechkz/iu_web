import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetTournamentDetailActionTypes} from "./getTournamentDetail.action.types";
import {GetTournamentDetailModel} from "./getTournamentDetail.model";

export const getTournamentDetailAction = createAction(GetTournamentDetailActionTypes.OnGetTournamentDetail,props<{requestData:number}>());
export const getTournamentDetailActionSuccess = createAction(GetTournamentDetailActionTypes.OnGetTournamentDetailSuccess, props<{
  responseData: ResponseData<GetTournamentDetailModel>
}>());
export const getTournamentDetailActionFailure = createAction(GetTournamentDetailActionTypes.OnGetTournamentDetailFailure, props<{ errors: any }>());
