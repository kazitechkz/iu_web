import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetVideoDetailModel} from "./getVideoDetail.model";

const get_video_detail_state = createFeatureSelector<ResponseData<GetVideoDetailModel>>('getVideoDetail');

export const getVideoDetailSelector = createSelector(get_video_detail_state, (state) => {
  return state;
})
