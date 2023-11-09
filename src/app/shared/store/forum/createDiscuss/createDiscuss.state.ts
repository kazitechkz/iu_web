import {DiscussRating} from "../../../models/discussRating.model";
import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Discuss} from "../../../models/discuss.model";

export const createDiscussAdapter = createEntityAdapter<Discuss>();

export const createDiscussState: EntityState<Discuss> = createDiscussAdapter.getInitialState();
