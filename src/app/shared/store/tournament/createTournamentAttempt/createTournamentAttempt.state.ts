import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Me} from "../../../models/user.model";
import {Attempt} from "../../../models/attempt.model";

export const createTournamentAttemptAdapter = createEntityAdapter<Attempt>();

export const createTournamentAttemptState: EntityState<Attempt> = createTournamentAttemptAdapter.getInitialState();
