import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {MyActiveBattlesActionTypes} from "./myActiveBattles.action.types";
import {Battle} from "../../../models/battle.model";

export const myActiveBattlesAction = createAction(MyActiveBattlesActionTypes.OnMyActiveBattles);
export const myActiveBattlesActionSuccess = createAction(MyActiveBattlesActionTypes.OnMyActiveBattlesSuccess, props<{
  responseData: ResponseData<Battle[]>
}>());
export const myActiveBattlesActionFailure = createAction(MyActiveBattlesActionTypes.OnMyActiveBattlesFailure, props<{ errors: any }>());
