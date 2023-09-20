import {createEntityAdapter} from "@ngrx/entity";
import {UserModel, Users} from "../../../models/user.model";

export const UserAdapter = createEntityAdapter<Users>();

export const UserState: UserModel = UserAdapter.getInitialState();
