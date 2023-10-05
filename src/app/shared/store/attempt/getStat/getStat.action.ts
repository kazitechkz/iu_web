import {createAction, props} from "@ngrx/store";
import {AccountActionTypes} from "../../user/account/account.action.types";
import {ResponseData} from "../../response_data";
import {GetStatActionTypes} from "./getStat.action.types";
import {Attempt} from "../../../models/attempt.model";

export const getStatAction = createAction(GetStatActionTypes.OnGetStat,props<{requestData:any}>());
export const getStatActionSuccess = createAction(GetStatActionTypes.OnGetStatSuccess, props<{
  responseData: ResponseData<Attempt>
}>());
export const getStatActionFailure = createAction(GetStatActionTypes.OnGetStatFailure, props<{ errors: any }>());
