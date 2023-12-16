import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Battle} from "../../../models/battle.model";

export const createBattleAdapter = createEntityAdapter<Battle>();

export const createBattleState: EntityState<Battle> = createBattleAdapter.getInitialState();
