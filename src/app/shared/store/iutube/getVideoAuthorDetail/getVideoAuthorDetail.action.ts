import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetVideoAuthorDetailActionTypes} from "./getVideoAuthorDetail.action.types";
import {GetVideoAuthorDetailModel} from "./getVideoAuthorDetail.model";
import {GetVideoAuthorDetailRequest} from "./getVideoAuthorDetail.request";

export const getVideoAuthorDetail = createAction(GetVideoAuthorDetailActionTypes.GetVideoAuthorDetail,props<{requestData:GetVideoAuthorDetailRequest}>());
export const getVideoAuthorDetailSuccess = createAction(GetVideoAuthorDetailActionTypes.GetVideoAuthorDetailSuccess, props<{
  responseData: ResponseData<GetVideoAuthorDetailModel>
}>());
export const getVideoAuthorDetailFailure = createAction(GetVideoAuthorDetailActionTypes.GetVideoAuthorDetailFailure, props<{ errors: any }>());
