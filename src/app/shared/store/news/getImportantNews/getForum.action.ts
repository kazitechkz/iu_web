import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetImportantNewsActionTypes} from "./getImportantNews.action.types";
import {Pagination} from "../../pagination";
import {Forum} from "../../../models/forum.model";
import {GetForumModel} from "./getForum.model";

export const getForumAction = createAction(GetImportantNewsActionTypes.GetForum,props<{requestData:number}>());
export const getForumActionSuccess = createAction(GetImportantNewsActionTypes.GetForumSuccess, props<{
  responseData: ResponseData<GetForumModel>
}>());
export const getForumActionFailure = createAction(GetImportantNewsActionTypes.GetForumFailure, props<{ errors: any }>());
