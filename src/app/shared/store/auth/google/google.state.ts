import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {UserModel, Users} from "../../../models/user.model";

export const GoogleAdapter = createEntityAdapter<Users>();

export const GoogleState: UserModel = GoogleAdapter.getInitialState();
