import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {AttemptModel} from "../../../models/attempt";

export const getAttemptByPromoCodeAdapter = createEntityAdapter<AttemptModel>();

export const getAttemptByPromoCodeState: EntityState<AttemptModel> = getAttemptByPromoCodeAdapter.getInitialState();
