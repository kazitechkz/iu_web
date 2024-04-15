import {createAction, props} from "@ngrx/store";
import {GoogleActionTypes} from "./google.action.types";
import {GoogleRequest} from "./google.request";
import {ResponseData} from "../../response_data";
import {AuthInfo} from "../login/loginRequest";
import {SocialUser} from "@abacritt/angularx-social-login";

export const googleAction = createAction(GoogleActionTypes.OnGoogle, props<{ requestData: SocialUser }>());
export const GoogleActionSuccess = createAction(GoogleActionTypes.OnGoogleSuccess, props<{
    responseData: ResponseData<AuthInfo>
}>());
export const GoogleActionFailure = createAction(GoogleActionTypes.OnGoogleFailure, props<{ errors: any }>());
