import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {GetMainVideosModel} from "./getMainVideos.model";

export const getMainVideosAdapter = createEntityAdapter<GetMainVideosModel>();

export const getMainVideosState: EntityState<GetMainVideosModel> = getMainVideosAdapter.getInitialState();
