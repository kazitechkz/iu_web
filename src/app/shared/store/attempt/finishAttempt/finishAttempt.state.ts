import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const getFinishAttemptAdapter = createEntityAdapter<number>();

export const finishAttemptState: EntityState<number> = getFinishAttemptAdapter.getInitialState();
