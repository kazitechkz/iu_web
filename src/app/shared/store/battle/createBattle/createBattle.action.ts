import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {CreateBattleActionTypes} from "./createBattle.action.types";
import {CreateBattleRequest} from "./createBattle.request";
import {Pagination} from "../../pagination";
import {Battle} from "../../../models/battle.model";

export const createBattleAction = createAction(CreateBattleActionTypes.OnCreateBattle,props<{requestData:CreateBattleRequest}>());
export const createBattleActionSuccess = createAction(CreateBattleActionTypes.OnCreateBattleSuccess, props<{
  responseData: ResponseData<Battle>
}>());
export const createBattleActionFailure = createAction(CreateBattleActionTypes.OnCreateBattleFailure, props<{ errors: any }>());
