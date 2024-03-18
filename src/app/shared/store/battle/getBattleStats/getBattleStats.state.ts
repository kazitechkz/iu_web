import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Battle} from "../../../models/battle.model";
import {GetBattleStatsModel} from "./getBattleStats.model";

export const getBattleStatsAdapter = createEntityAdapter<GetBattleStatsModel>();

export const getBattleStatsState: EntityState<GetBattleStatsModel> = getBattleStatsAdapter.getInitialState();
