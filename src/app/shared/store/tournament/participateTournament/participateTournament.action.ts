import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {ParticipateTournamentActionTypes} from "./participateTournament.action.types";
import {ParticipateTournamentRequest} from "./participateTournament.request";
import {PayModel} from "../../paybox/pay_create/pay.model";

export const OnParticipateTournamentAction = createAction(ParticipateTournamentActionTypes.OnParticipateTournament,props<{requestData:ParticipateTournamentRequest}>());
export const OnParticipateTournamentActionSuccess = createAction(ParticipateTournamentActionTypes.OnParticipateTournamentSuccess, props<{
  responseData: ResponseData<boolean>
}>());
export const OnParticipateTournamentActionFailure = createAction(ParticipateTournamentActionTypes.OnParticipateTournamentFailure, props<{ errors: any }>());
export const OnPayTournamentAction = createAction(ParticipateTournamentActionTypes.OnPayTournament,props<{requestData:ParticipateTournamentRequest}>());
export const OnPayTournamentActionSuccess = createAction(ParticipateTournamentActionTypes.OnPayTournamentSuccess, props<{
  responseData: ResponseData<PayModel>
}>());
export const OnPayTournamentActionFailure = createAction(ParticipateTournamentActionTypes.OnPayTournamentFailure, props<{ errors: any }>());
