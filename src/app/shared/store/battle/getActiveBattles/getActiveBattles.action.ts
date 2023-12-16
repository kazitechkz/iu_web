import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetActiveBattlesActionTypes} from "./getActiveBattles.action.types";
import {GetActiveBattlesRequest} from "./getActiveBattles.request";
import {Pagination} from "../../pagination";
import {Battle} from "../../../models/battle.model";

export const getActiveBattlesAction = createAction(GetActiveBattlesActionTypes.OnGetActiveBattles,props<{requestData:GetActiveBattlesRequest}>());
export const getActiveBattlesActionSuccess = createAction(GetActiveBattlesActionTypes.OnGetActiveBattlesSuccess, props<{
  responseData: ResponseData<Pagination<Battle[]>>
}>());
export const getActiveBattlesActionFailure = createAction(GetActiveBattlesActionTypes.OnGetActiveBattlesFailure, props<{ errors: any }>());
