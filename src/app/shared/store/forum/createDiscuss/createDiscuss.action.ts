import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Forum} from "../../../models/forum.model";
import {CreateDiscussActionTypes} from "./createDiscuss.action.types";
import {CreateDiscussRequest} from "./createDiscuss.request";
import {DiscussRating} from "../../../models/discussRating.model";
import {Discuss} from "../../../models/discuss.model";

export const createDiscussAction = createAction(CreateDiscussActionTypes.CreateDiscuss,props<{
  requestData: CreateDiscussRequest
}>());
export const createDiscussActionSuccess = createAction(CreateDiscussActionTypes.CreateDiscussSuccess, props<{
  responseData: ResponseData<Discuss>
}>());
export const createDiscussActionFailure = createAction(CreateDiscussActionTypes.CreateDiscussFailure, props<{ errors: any }>());
