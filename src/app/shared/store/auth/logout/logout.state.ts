import {createEntityAdapter} from "@ngrx/entity";

export const logoutAdapter = createEntityAdapter<void>();

export const LogOutState = logoutAdapter.getInitialState();
