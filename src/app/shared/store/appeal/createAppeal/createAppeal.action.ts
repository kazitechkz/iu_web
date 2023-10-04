import {CreateAppealActionTypes} from "./createAppeal.action.types";
import {CreateAppealRequest} from "./createAppeal.request";
import {ResponseData} from "../../response_data";
import {createAction, props} from "@ngrx/store";


export const onCreateAppealAction  = createAction(CreateAppealActionTypes.CreateAppeal,props<{requestData:CreateAppealRequest}>());
export const onCreateAppealActionSuccess  = createAction(CreateAppealActionTypes.CreateAppealSuccess,props<{ responseData: ResponseData<boolean>}>());
export const onCreateAppealActionFailure = createAction(CreateAppealActionTypes.CreateAppealFailure, props<{ errors: any }>());
