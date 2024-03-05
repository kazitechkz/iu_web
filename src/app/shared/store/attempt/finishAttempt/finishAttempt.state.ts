import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {FinishAttemptModel} from "./finishAttempt.model";

export const getFinishAttemptAdapter = createEntityAdapter<FinishAttemptModel>();

export const finishAttemptState: EntityState<FinishAttemptModel> = getFinishAttemptAdapter.getInitialState();
