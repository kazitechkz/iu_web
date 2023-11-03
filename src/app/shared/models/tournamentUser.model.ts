import {Image} from "./image.model";
import {Gender} from "./gender.model";

export interface TournamentUser{
  id:number,
  username:string,
  name:string,
  phone:string,
  email:string,
  file:Image|null,
  gender:Gender|null,
  birth_date: Date|null
}
