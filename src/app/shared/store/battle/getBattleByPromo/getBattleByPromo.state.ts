import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Battle} from "../../../models/battle.model";

export const getBattleByPromoAdapter = createEntityAdapter<Battle>();

export const getBattleByPromoState: EntityState<Battle> = getBattleByPromoAdapter.getInitialState();
