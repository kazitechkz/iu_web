import {Forum} from "../../../models/forum.model";
import {DiscussRating} from "../../../models/discussRating.model";

export interface GetForumModel{
  forum:Forum,
  rating:DiscussRating|null
}
