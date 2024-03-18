import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Battle} from "../../../models/battle.model";
import {Pagination} from "../../pagination";

export const getBattleHistoryAdapter = createEntityAdapter<Pagination<Battle[]>>();

export const getBattleHistoryState: EntityState<Pagination<Battle[]>> = getBattleHistoryAdapter.getInitialState();
