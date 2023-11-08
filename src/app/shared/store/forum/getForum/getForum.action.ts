import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetForumActionTypes} from "./getForum.action.types";
import {Pagination} from "../../pagination";
import {Forum} from "../../../models/forum.model";
import {GetForumModel} from "./getForum.model";

export const getForumAction = createAction(GetForumActionTypes.GetForum,props<{requestData:number}>());
export const getForumActionSuccess = createAction(GetForumActionTypes.GetForumSuccess, props<{
  responseData: ResponseData<GetForumModel>
}>());
export const getForumActionFailure = createAction(GetForumActionTypes.GetForumFailure, props<{ errors: any }>());
