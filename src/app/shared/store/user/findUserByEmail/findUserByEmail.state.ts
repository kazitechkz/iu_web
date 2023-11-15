import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {OrdinaryUser} from "../../../models/user.model";

export const findUserByEmailAdapter = createEntityAdapter<OrdinaryUser>();

export const findUserByEmailState: EntityState<OrdinaryUser> = findUserByEmailAdapter.getInitialState();
