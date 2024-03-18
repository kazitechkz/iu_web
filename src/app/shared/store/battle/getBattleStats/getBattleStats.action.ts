import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetBattleStatsActionTypes} from "./getBattleStats.action.types";
import {GetBattleStatsModel} from "./getBattleStats.model";

export const getBattleStatsAction = createAction(GetBattleStatsActionTypes.OnGetBattleStats);
export const getBattleStatsActionSuccess = createAction(GetBattleStatsActionTypes.OnGetBattleStatsSuccess, props<{
  responseData: ResponseData<GetBattleStatsModel>
}>());
export const getBattleStatsActionFailure = createAction(GetBattleStatsActionTypes.OnGetBattleStatsFailure, props<{ errors: any }>());
