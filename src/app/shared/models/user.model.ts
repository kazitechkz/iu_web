import {EntityState} from "@ngrx/entity";
import {Image} from "./image.model";
import {Gender} from "./gender.model";

export interface Users {
    name: string
    email: string
    phone: string
    username: string
    password: string
}
export interface UserModel extends EntityState<Users> {

}
export interface Me {
    name: string
    email: string
    phone: string
    role: string
    subscription: any
    file:Image|null
    gender:Gender|null
    birth_date: Date|null
}

export interface OrdinaryUser {
  id:number
  name: string
  email: string
  phone: string
  file:Image|null
  gender:Gender|null
  birth_date: Date|null
}
