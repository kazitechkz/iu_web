import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GetVideoDetailModel} from "./getVideoDetail.model";

export const getVideoDetailAdapter = createEntityAdapter<GetVideoDetailModel>();

export const getVideoDetailState: EntityState<GetVideoDetailModel> = getVideoDetailAdapter.getInitialState();
