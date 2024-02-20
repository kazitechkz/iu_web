import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetAllVideosActionTypes} from "./getAllVideos.action.types";
import {Pagination} from "../../pagination";
import {IutubeVideo} from "../../../models/iutubeVideo.model";
import {GetAllVideosRequest} from "./getAllVideos.request";

export const getAllVideosAction = createAction(GetAllVideosActionTypes.GetAllVideos,props<{requestData:GetAllVideosRequest}>());
export const getAllVideosActionSuccess = createAction(GetAllVideosActionTypes.GetAllVideosSuccess, props<{
  responseData: ResponseData<Pagination<IutubeVideo[]>>
}>());
export const getAllVideosActionFailure = createAction(GetAllVideosActionTypes.GetAllVideosFailure, props<{ errors: any }>());
