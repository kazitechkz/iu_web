import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {JoinToBattleActionTypes} from "./joinToBattle.action.types";
import {JoinToBattleRequest} from "./joinToBattle.request";
import {Battle} from "../../../models/battle.model";

export const joinToBattleAction = createAction(JoinToBattleActionTypes.OnJoinToBattle,props<{requestData:JoinToBattleRequest}>());
export const joinToBattleActionSuccess = createAction(JoinToBattleActionTypes.OnJoinToBattleSuccess, props<{
  responseData: ResponseData<Battle>
}>());
export const joinToBattleActionFailure = createAction(JoinToBattleActionTypes.OnJoinToBattleFailure, props<{ errors: any }>());
