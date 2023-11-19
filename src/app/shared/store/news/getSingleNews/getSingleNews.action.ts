import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetSingleNewsActionTypes} from "./getSingleNews.action.types";
import {News} from "../../../models/news.model";

export const getSingleNewsAction = createAction(GetSingleNewsActionTypes.GetSingleNews,props<{
  requestData: any
}>());
export const getSingleNewsActionSuccess = createAction(GetSingleNewsActionTypes.GetSingleNewsSuccess, props<{
  responseData: ResponseData<News>
}>());
export const getSingleNewsActionFailure = createAction(GetSingleNewsActionTypes.GetSingleNewsFailure, props<{ errors: any }>());
