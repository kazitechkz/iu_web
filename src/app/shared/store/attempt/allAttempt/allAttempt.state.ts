import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Attempt} from "../../../models/attempt.model";
import {Pagination} from "../../pagination";

export const allAttemptAdapter = createEntityAdapter<Pagination<Attempt>>();

export const allAttemptState: EntityState<Pagination<Attempt>> = allAttemptAdapter.getInitialState();
