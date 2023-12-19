import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {FinishBattleResultActionTypes} from "./finishBattleResult.action.types";
import {FinishBattleResultModel} from "../../../models/finishBattleResult.model";

export const finishBattleResultAction = createAction(FinishBattleResultActionTypes.OnFinishBattleResult,props<{requestData:number}>());
export const finishBattleResultActionSuccess = createAction(FinishBattleResultActionTypes.OnFinishBattleResultSuccess, props<{
  responseData: ResponseData<FinishBattleResultModel>
}>());
export const finishBattleResultActionFailure = createAction(FinishBattleResultActionTypes.OnFinishBattleResultFailure, props<{ errors: any }>());
