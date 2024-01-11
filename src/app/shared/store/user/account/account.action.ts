import {Action, createAction, props} from "@ngrx/store";
import {AccountActionTypes} from "./account.action.types";
import {ChangeProfileRequest, LoginRequest} from "./account.request";
import {ResponseData} from "../../response_data";
import {Me} from "../../../models/user.model";
import {prop} from "@rxweb/reactive-form-validators";


export const accountAction = createAction(AccountActionTypes.OnAccount);
export const accountActionSuccess = createAction(AccountActionTypes.OnAccountSuccess, props<{
    responseData: ResponseData<Me>
}>());
export const accountActionFailure = createAction(AccountActionTypes.OnAccountFailure, props<{ errors: any }>());

export const accountChangeAction = createAction(AccountActionTypes.OnChangeAccount, props<{request: ChangeProfileRequest}>());
export const accountChangeActionSuccess = createAction(AccountActionTypes.OnChangeAccountSuccess, props<{
    responseData: ResponseData<boolean>
}>());
export const accountChangeActionFailure = createAction(AccountActionTypes.OnChangeAccountFailure, props<{ errors: any }>());
