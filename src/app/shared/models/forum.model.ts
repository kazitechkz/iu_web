import {Subject} from "./subject.model";
import {OrdinaryUser, UserModel} from "./user.model";

export interface Forum{
  id:number
  user_id:number
  subject_id:number
  text:string
  attachment:string
  subject:Subject|null,
  user:OrdinaryUser|null,

}
