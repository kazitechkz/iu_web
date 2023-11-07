import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {AllForumActionTypes} from "./allForum.action.types";
import {AllForumRequest} from "./allForum.request";
import {Pagination} from "../../pagination";
import {Forum} from "../../../models/forum.model";

export const allForumAction = createAction(AllForumActionTypes.OnAllForum,props<{requestData:AllForumRequest}>());
export const allForumActionSuccess = createAction(AllForumActionTypes.OnAllForumSuccess, props<{
  responseData: ResponseData<Pagination<Forum[]>>
}>());
export const allForumActionFailure = createAction(AllForumActionTypes.OnAllForumFailure, props<{ errors: any }>());
