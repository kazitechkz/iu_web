import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GetForumModel} from "./getForum.model";

export const getForumAdapter = createEntityAdapter<GetForumModel>();

export const getForumState: EntityState<GetForumModel> = getForumAdapter.getInitialState();
