import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Battle} from "../../../models/battle.model";

export const myActiveBattlesAdapter = createEntityAdapter<Battle[]>();

export const myActiveBattlesState: EntityState<Battle[]> = myActiveBattlesAdapter.getInitialState();
