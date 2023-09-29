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
export interface Me {
    name: string,
    email: string,
    phone: string,
    role: string,
    subscription: any
}
