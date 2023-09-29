import {Action, createAction, props} from "@ngrx/store";
import {AccountActionTypes} from "./account.action.types";
import {LoginRequest} from "./account.request";
import {ResponseData} from "../../response_data";
import {Me} from "../../../models/user.model";


export const accountAction = createAction(AccountActionTypes.OnAccount);
export const accountActionSuccess = createAction(AccountActionTypes.OnAccountSuccess, props<{
    responseData: ResponseData<Me>
}>());
export const accountActionFailure = createAction(AccountActionTypes.OnAccountFailure, props<{ errors: any }>());
