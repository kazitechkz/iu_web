import {Subject} from "./subject.model";
import {OrdinaryUser, UserModel} from "./user.model";

export interface Forum{
  id:number
  user_id:number
  subject_id:number
  text:string
  attachment:string
  discusses_count:number|null
  discuss_rating_sum_rating:number|null
  subject:Subject|null,
  user:OrdinaryUser|null,
  created_at:Date,
  updated_at:Date|null,
}
