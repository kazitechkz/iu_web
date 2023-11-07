import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Forum} from "../../../models/forum.model";
import {CreateForumActionTypes} from "./createForum.action.types";
import {CreateForumRequest} from "./createForum.request";

export const createForumAction = createAction(CreateForumActionTypes.CreateForum,props<{
  requestData: CreateForumRequest
}>());
export const createForumActionSuccess = createAction(CreateForumActionTypes.CreateForumSuccess, props<{
  responseData: ResponseData<Forum>
}>());
export const createForumActionFailure = createAction(CreateForumActionTypes.CreateForumFailure, props<{ errors: any }>());
