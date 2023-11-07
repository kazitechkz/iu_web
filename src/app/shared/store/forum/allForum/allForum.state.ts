import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {Forum} from "../../../models/forum.model";

export const allForumAdapter = createEntityAdapter<Pagination<Forum[]>>();

export const allForumState: EntityState<Pagination<Forum[]>> = allForumAdapter.getInitialState();
