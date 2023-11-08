import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GetForumDiscussModel} from "./getForumDiscuss.model";

export const getForumDiscussAdapter = createEntityAdapter<GetForumDiscussModel>();

export const getForumDiscussState: EntityState<GetForumDiscussModel> = getForumDiscussAdapter.getInitialState();
