import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetImportantNewsActionTypes} from "./getImportantNews.action.types";
import {Pagination} from "../../pagination";
import {News} from "../../../models/news.model";

export const getImportantNewsAction = createAction(GetImportantNewsActionTypes.GetImportantNews);
export const getImportantNewsActionSuccess = createAction(GetImportantNewsActionTypes.GetImportantNewsSuccess, props<{
  responseData: ResponseData<News>
}>());
export const getImportantNewsActionFailure = createAction(GetImportantNewsActionTypes.GetImportantNewsFailure, props<{ errors: any }>());
