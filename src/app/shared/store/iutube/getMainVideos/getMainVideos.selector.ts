import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetMainVideosModel} from "./getMainVideos.model";

const get_main_videos_state = createFeatureSelector<ResponseData<GetMainVideosModel>>('getMainVideos');

export const getMainVideosSelector = createSelector(get_main_videos_state, (state) => {
  return state;
})
