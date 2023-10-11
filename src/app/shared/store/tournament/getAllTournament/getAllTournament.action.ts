import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetAllTournamentActionTypes} from "./getAllTournament.action.types";
import {GetAllTournamentModel} from "./getAllTournament.model";

export const getAllTournamentAction = createAction(GetAllTournamentActionTypes.OnGetAllTournament);
export const getAllTournamentActionSuccess = createAction(GetAllTournamentActionTypes.OnGetAllTournamentSuccess, props<{
  responseData: ResponseData<GetAllTournamentModel>
}>());
export const getAllTournamentActionFailure = createAction(GetAllTournamentActionTypes.OnGetAllTournamentFailure, props<{ errors: any }>());
