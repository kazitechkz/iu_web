import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetBattleHistoryActionTypes} from "./getBattleHistory.action.types";
import {GetBattleHistoryRequest} from "./getBattleHistory.request";
import {Pagination} from "../../pagination";
import {Battle} from "../../../models/battle.model";

export const getBattleHistoryAction = createAction(GetBattleHistoryActionTypes.OnGetBattleHistory,props<{requestData:GetBattleHistoryRequest}>());
export const getBattleHistoryActionSuccess = createAction(GetBattleHistoryActionTypes.OnGetBattleHistorySuccess, props<{
  responseData: ResponseData<Pagination<Battle[]>>
}>());
export const getBattleHistoryActionFailure = createAction(GetBattleHistoryActionTypes.OnGetBattleHistoryFailure, props<{ errors: any }>());
