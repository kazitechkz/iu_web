import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Pagination} from "../../pagination";
import {IutubeVideo} from "../../../models/iutubeVideo.model";

export const getAllVideosAdapter = createEntityAdapter<Pagination<IutubeVideo[]>>();

export const getAllVideosState: EntityState<Pagination<IutubeVideo[]>> = getAllVideosAdapter.getInitialState();
