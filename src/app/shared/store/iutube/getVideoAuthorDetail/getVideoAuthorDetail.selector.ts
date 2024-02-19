import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetVideoAuthorDetailModel} from "./getVideoAuthorDetail.model";

const get_video_author_detail_state = createFeatureSelector<ResponseData<GetVideoAuthorDetailModel>>('getVideoAuthorDetail');

export const getVideoAuthorDetailSelector = createSelector(get_video_author_detail_state, (state) => {
  return state;
})
