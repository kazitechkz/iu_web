import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const finishCareerQuizAdapter = createEntityAdapter<number>();

export const finishCareerQuizState: EntityState<number> = finishCareerQuizAdapter.getInitialState();
