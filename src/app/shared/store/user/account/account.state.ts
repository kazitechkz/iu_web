import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Me, UserModel, Users} from "../../../models/user.model";
import {ResponseData} from "../../response_data";

export const accountAdapter = createEntityAdapter<Me>();
export const accountState: EntityState<Me> = accountAdapter.getInitialState();
export const changeAccountAdapter = createEntityAdapter<boolean>();
export const changeAccountState: EntityState<boolean> = changeAccountAdapter.getInitialState();
