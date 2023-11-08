import {OrdinaryUser} from "./user.model";
import {Discuss} from "./discuss.model";
import {Forum} from "./forum.model";

export interface DiscussRating{
  id:number
  user_id:number
  discuss_id:number|null
  forum_id:number|null
  rating:number|null
  user:OrdinaryUser|null,
  discuss:Discuss|null,
  forum:Forum|null
  created_at:Date,
  updated_at:Date|null,
}
