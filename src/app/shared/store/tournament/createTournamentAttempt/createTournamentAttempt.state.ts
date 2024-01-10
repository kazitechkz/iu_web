import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Me} from "../../../models/user.model";
import {Attempt} from "../../../models/attempt.model";

export const createTournamentAttemptAdapter = createEntityAdapter<number>();

export const createTournamentAttemptState: EntityState<number> = createTournamentAttemptAdapter.getInitialState();
