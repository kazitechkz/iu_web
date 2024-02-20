import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {IutubeVideo} from "../../../models/iutubeVideo.model";

const get_all_videos_state = createFeatureSelector<ResponseData<Pagination<IutubeVideo[]>>>('getAllVideos');

export const getAllVideosSelector = createSelector(get_all_videos_state, (state) => {
  return state;
})
