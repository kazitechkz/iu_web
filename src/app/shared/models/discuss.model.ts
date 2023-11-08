import {OrdinaryUser} from "./user.model";

export interface Discuss{
  id:number
  user_id:number
  forum_id:number
  text:string
  discuss_rating_sum_rating:number,
  user:OrdinaryUser|null
  created_at:Date,
  updated_at:Date|null,
}
