import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetMainVideosActionTypes} from "./getMainVideos.action.types";
import {GetMainVideosModel} from "./getMainVideos.model";

export const getMainVideosAction = createAction(GetMainVideosActionTypes.GetMainVideos);
export const getMainVideosActionSuccess = createAction(GetMainVideosActionTypes.GetMainVideosSuccess, props<{
  responseData: ResponseData<GetMainVideosModel>
}>());
export const getMainVideosActionFailure = createAction(GetMainVideosActionTypes.GetMainVideosFailure, props<{ errors: any }>());
