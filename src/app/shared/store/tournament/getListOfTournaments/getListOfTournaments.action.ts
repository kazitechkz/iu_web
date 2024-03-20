import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetListOfTournamentsActionTypes} from "./getListOfTournaments.action.types";
import {GetListOfTournamentsRequest} from "./getListOfTournaments.request";
import {Pagination} from "../../pagination";
import {Tournament} from "../../../models/tournament.model";

export const getListOfTournamentsAction = createAction(GetListOfTournamentsActionTypes.OnGetListOfTournaments,props<{requestData:GetListOfTournamentsRequest}>());
export const getListOfTournamentsActionSuccess = createAction(GetListOfTournamentsActionTypes.OnGetListOfTournamentsSuccess, props<{
  responseData: ResponseData<Pagination<Tournament[]>>
}>());
export const getListOfTournamentsActionFailure = createAction(GetListOfTournamentsActionTypes.OnGetListOfTournamentsFailure, props<{ errors: any }>());
