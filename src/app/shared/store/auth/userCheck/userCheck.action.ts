import {Action, createAction, props} from "@ngrx/store";
import {UserCheckActionTypes} from "./userCheck.action.types";
import {ResponseData} from "../../response_data";



export const userCheckAction = createAction(UserCheckActionTypes.OnUserCheck);
export const userCheckActionSuccess = createAction(UserCheckActionTypes.OnUserCheckSuccess, props<{
    responseData: ResponseData<boolean>
}>());
export const userCheckActionFailure = createAction(UserCheckActionTypes.OnUserCheckFailure, props<{ errors: any }>());
