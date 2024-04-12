import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetInformationActionTypes} from "./getInformation.action.types";
import {Information} from "../../../models/information.model";

export const getInformationAction = createAction(GetInformationActionTypes.GetInformationAction,props<{
  requestData: string
}>());
export const getInformationActionSuccess = createAction(GetInformationActionTypes.GetInformationActionSuccess, props<{
  responseData: ResponseData<Information>
}>());
export const getInformationActionFailure = createAction(GetInformationActionTypes.GetInformationActionFailure, props<{ errors: any }>());
