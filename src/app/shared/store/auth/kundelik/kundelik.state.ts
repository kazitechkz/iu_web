import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {UserModel, Users} from "../../../models/user.model";

export const KundelikAdapter = createEntityAdapter<Users>();

export const KundelikState: UserModel = KundelikAdapter.getInitialState();
