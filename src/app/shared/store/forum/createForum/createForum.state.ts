import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Plan} from "../../../models/plan.model";
import {Forum} from "../../../models/forum.model";

export const createForumAdapter = createEntityAdapter<Forum>();

export const createForumState: EntityState<Forum> = createForumAdapter.getInitialState();
