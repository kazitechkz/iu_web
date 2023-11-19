import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Pagination} from "../../pagination";
import {News} from "../../../models/news.model";
import {AllNewsActionTypes} from "./allNews.action.types";
import {AllNewsRequest} from "./allNews.request";

export const allNewsAction = createAction(AllNewsActionTypes.AllNews,props<{
  requestData:AllNewsRequest
}>());
export const allNewsActionSuccess = createAction(AllNewsActionTypes.AllNewsSuccess, props<{
  responseData: ResponseData<Pagination<News[]>>
}>());
export const allNewsActionFailure = createAction(AllNewsActionTypes.AllNewsFailure, props<{ errors: any }>());
