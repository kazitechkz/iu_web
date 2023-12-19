import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {FinishBattleResultModel} from "../../../models/finishBattleResult.model";

const finish_battle_result_state = createFeatureSelector<ResponseData<FinishBattleResultModel>>('finishBattleResult');

export const finishBattleResultSelector = createSelector(finish_battle_result_state, (state) => {
  return state;
})
