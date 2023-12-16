import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {Battle} from "../../../models/battle.model";

export const getActiveBattlesAdapter = createEntityAdapter<Pagination<Battle[]>>();

export const getActiveBattlesState: EntityState<Pagination<Battle[]>> = getActiveBattlesAdapter.getInitialState();
