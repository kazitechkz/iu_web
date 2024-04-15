import {createAction, props} from "@ngrx/store";
import {LogoutActionTypes} from "./logout.action.types";

export const logoutAction = createAction(LogoutActionTypes.OnLogout);
export const LogoutActionSuccess = createAction(LogoutActionTypes.OnLogoutSuccess);
export const LogoutActionFailure = createAction(LogoutActionTypes.OnLogoutFailure, props<{ errors: any }>());
