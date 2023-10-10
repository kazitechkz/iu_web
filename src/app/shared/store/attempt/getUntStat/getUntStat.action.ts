import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetUntStatActionTypes} from "./getUntStat.action.types";
import {UntStatModel} from "../../../models/untStat.model";

export const getUntStatAction = createAction(GetUntStatActionTypes.OnGetUntStat);
export const getUntStatActionSuccess = createAction(GetUntStatActionTypes.OnGetUntStatSuccess, props<{
  responseData: ResponseData<UntStatModel>
}>());
export const getUntStatActionFailure = createAction(GetUntStatActionTypes.OnGetUntStatFailure, props<{ errors: any }>());
