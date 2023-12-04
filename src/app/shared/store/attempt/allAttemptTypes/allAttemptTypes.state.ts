import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {AttemptType} from "../../../models/attemptType.model";

export const allAttemptTypesAdapter = createEntityAdapter<AttemptType[]>();

export const allAttemptTypesState: EntityState<AttemptType[]> = allAttemptTypesAdapter.getInitialState();
