import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {CreateTournamentAttemptActionTypes} from "./createTournamentAttempt.action.types";
import {Attempt} from "../../../models/attempt.model";
import {CreateTournamentAttemptRequest} from "./createTournamentAttempt.request";

export const createTournamentAttemptAction = createAction(CreateTournamentAttemptActionTypes.OnCreateTournamentAttempt,props<{requestData:CreateTournamentAttemptRequest}>());
export const createTournamentAttemptActionSuccess = createAction(CreateTournamentAttemptActionTypes.OnCreateTournamentAttemptSuccess, props<{
  responseData: ResponseData<number>
}>());
export const createTournamentAttemptActionFailure = createAction(CreateTournamentAttemptActionTypes.OnCreateTournamentAttemptFailure, props<{ errors: any }>());
