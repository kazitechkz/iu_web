import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetSubTournamentDetailActionTypes} from "./getSubTournamentDetail.action.types";
import {GetSubTournamentDetailModel} from "./getSubTournamentDetail.model";

export const getSubTournamentDetailAction = createAction(GetSubTournamentDetailActionTypes.OnGetSubTournamentDetail,props<{requestData:number}>());
export const getSubTournamentDetailActionSuccess = createAction(GetSubTournamentDetailActionTypes.OnGetSubTournamentDetailSuccess, props<{
  responseData: ResponseData<GetSubTournamentDetailModel>
}>());
export const getSubTournamentDetailActionFailure = createAction(GetSubTournamentDetailActionTypes.OnGetSubTournamentDetailFailure, props<{ errors: any }>());
