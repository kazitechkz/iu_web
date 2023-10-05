import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetStatActionTypes} from "./getStat.action.types";
import {GetStateModel} from "./getState.model";

export const getStatAction = createAction(GetStatActionTypes.OnGetStat,props<{requestData:any}>());
export const getStatActionSuccess = createAction(GetStatActionTypes.OnGetStatSuccess, props<{
  responseData: ResponseData<GetStateModel>
}>());
export const getStatActionFailure = createAction(GetStatActionTypes.OnGetStatFailure, props<{ errors: any }>());
