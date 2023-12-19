import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {FinishBattleResultModel} from "../../../models/finishBattleResult.model";

export const finishBattleResultAdapter = createEntityAdapter<FinishBattleResultModel>();

export const finishBattleResultState: EntityState<FinishBattleResultModel> = finishBattleResultAdapter.getInitialState();
