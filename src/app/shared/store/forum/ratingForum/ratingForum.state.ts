import {DiscussRating} from "../../../models/discussRating.model";
import {createEntityAdapter, EntityState} from "@ngrx/entity";

export const ratingForumAdapter = createEntityAdapter<DiscussRating>();

export const ratingForumState: EntityState<DiscussRating> = ratingForumAdapter.getInitialState();
