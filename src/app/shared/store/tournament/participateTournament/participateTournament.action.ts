import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {ParticipateTournamentActionTypes} from "./participateTournament.action.types";
import {ParticipateTournamentRequest} from "./participateTournament.request";

export const OnParticipateTournamentAction = createAction(ParticipateTournamentActionTypes.OnParticipateTournament,props<{requestData:ParticipateTournamentRequest}>());
export const OnParticipateTournamentActionSuccess = createAction(ParticipateTournamentActionTypes.OnParticipateTournamentSuccess, props<{
  responseData: ResponseData<boolean>
}>());
export const OnParticipateTournamentActionFailure = createAction(ParticipateTournamentActionTypes.OnParticipateTournamentFailure, props<{ errors: any }>());
