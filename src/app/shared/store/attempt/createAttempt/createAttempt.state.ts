import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Me} from "../../../models/user.model";
import {Attempt} from "../../../models/attempt.model";

export const createAttemptAdapter = createEntityAdapter<Attempt>();

export const createAttemptState: EntityState<Attempt> = createAttemptAdapter.getInitialState();
