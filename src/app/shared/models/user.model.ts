import {EntityState} from "@ngrx/entity";

export interface Users {
    name: string,
    email: string,
    phone: string,
    username: string,
    password: string
}
export interface UserModel extends EntityState<Users> {

}
export interface UserInfo {
    name: string,
    email: string,
    phone: string,
    token: string,
    role: string
}
