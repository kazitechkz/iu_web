import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {AuthInfo} from "../login/loginRequest";

export const KundelikAdapter = createEntityAdapter<AuthInfo>();

export const KundelikState: EntityState<AuthInfo> = KundelikAdapter.getInitialState();
