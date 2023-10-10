import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Attempt} from "../../../models/attempt.model";
import {Pagination} from "../../pagination";
import {AttemptModel} from "../../../models/attempt";

export const allAttemptAdapter = createEntityAdapter<Pagination<AttemptModel[]>>();

export const allAttemptState: EntityState<Pagination<AttemptModel[]>> = allAttemptAdapter.getInitialState();
