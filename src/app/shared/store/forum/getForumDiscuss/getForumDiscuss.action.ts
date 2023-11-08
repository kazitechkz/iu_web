import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetForumDiscussActionTypes} from "./getForumDiscuss.action.types";
import {GetForumDiscussModel} from "./getForumDiscuss.model";
import {GetForumDiscussRequest} from "./getForumDiscuss.request";

export const getForumDiscussAction = createAction(GetForumDiscussActionTypes.GetForumDiscuss,props<{requestData:GetForumDiscussRequest}>());
export const getForumDiscussActionSuccess = createAction(GetForumDiscussActionTypes.GetForumDiscussSuccess, props<{
  responseData: ResponseData<GetForumDiscussModel>
}>());
export const getForumDiscussActionFailure = createAction(GetForumDiscussActionTypes.GetForumDiscussFailure, props<{ errors: any }>());
