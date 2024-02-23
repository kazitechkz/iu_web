import {createAction, props} from "@ngrx/store";
import {KundelikActionTypes} from "./kundelik.action.types";
import {KundelikRequest} from "./kundelik.request";
import {ResponseData} from "../../response_data";
import {AuthInfo} from "../login/loginRequest";

export const kundelikAction = createAction(KundelikActionTypes.OnKundelik, props<{ requestData: KundelikRequest }>());
export const KundelikActionSuccess = createAction(KundelikActionTypes.OnKundelikSuccess, props<{
    responseData: ResponseData<AuthInfo>
}>());
export const KundelikActionFailure = createAction(KundelikActionTypes.OnKundelikFailure, props<{ errors: any }>());
