import {Forum} from "../../../models/forum.model";
import {DiscussRating} from "../../../models/discussRating.model";
import {Pagination} from "../../pagination";
import {Discuss} from "../../../models/discuss.model";

export interface GetForumDiscussModel {
  discusses:Pagination<Discuss[]>,
  ratings:DiscussRating[]
}
