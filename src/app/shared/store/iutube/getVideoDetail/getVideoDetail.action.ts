import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetVideoDetailActionTypes} from "./getVideoDetail.action.types";
import {GetVideoDetailModel} from "./getVideoDetail.model";
import {GetVideoDetailRequest} from "./getVideoDetail.request";

export const getVideoDetail = createAction(GetVideoDetailActionTypes.GetVideoDetail,props<{requestData:GetVideoDetailRequest}>());
export const getVideoDetailSuccess = createAction(GetVideoDetailActionTypes.GetVideoDetailSuccess, props<{
  responseData: ResponseData<GetVideoDetailModel>
}>());
export const getVideoDetailFailure = createAction(GetVideoDetailActionTypes.GetVideoDetailFailure, props<{ errors: any }>());
