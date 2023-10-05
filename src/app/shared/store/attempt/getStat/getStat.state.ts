import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Me} from "../../../models/user.model";
import {Attempt} from "../../../models/attempt.model";

export const getStatAdapter = createEntityAdapter<Attempt>();

export const getStatState: EntityState<Attempt> = getStatAdapter.getInitialState();
