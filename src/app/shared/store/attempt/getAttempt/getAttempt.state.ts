import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Me} from "../../../models/user.model";
import {Attempt} from "../../../models/attempt.model";

export const getAttemptAdapter = createEntityAdapter<Attempt>();

export const getAttemptState: EntityState<Attempt> = getAttemptAdapter.getInitialState();
