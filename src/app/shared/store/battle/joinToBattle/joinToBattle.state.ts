import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Battle} from "../../../models/battle.model";

export const joinToBattleAdapter = createEntityAdapter<Battle>();

export const joinToBattleState: EntityState<Battle> = joinToBattleAdapter.getInitialState();
