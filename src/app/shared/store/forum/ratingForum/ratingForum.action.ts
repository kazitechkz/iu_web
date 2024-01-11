import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Forum} from "../../../models/forum.model";
import {RatingForumActionTypes} from "./ratingForum.action.types";
import {RatingForumRequest} from "./ratingForum.request";
import {DiscussRating} from "../../../models/discussRating.model";

export const ratingForumAction = createAction(RatingForumActionTypes.RatingForum,props<{
  requestData: RatingForumRequest
}>());
export const ratingForumActionSuccess = createAction(RatingForumActionTypes.RatingForumSuccess, props<{
  responseData: ResponseData<DiscussRating>
}>());
export const ratingForumActionFailure = createAction(RatingForumActionTypes.RatingForumFailure, props<{ errors: any }>());

export const clearRatingForumAction = createAction(RatingForumActionTypes.ClearRatingForum);
