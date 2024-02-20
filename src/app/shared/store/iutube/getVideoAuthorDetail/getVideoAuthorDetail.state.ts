import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GetVideoAuthorDetailModel} from "./getVideoAuthorDetail.model";

export const getVideoAuthorDetailAdapter = createEntityAdapter<GetVideoAuthorDetailModel>();

export const getVideoAuthorDetailState: EntityState<GetVideoAuthorDetailModel> = getVideoAuthorDetailAdapter.getInitialState();
