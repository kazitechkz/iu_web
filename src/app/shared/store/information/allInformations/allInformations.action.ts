import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {AllInformationsActionTypes} from "./allInformations.action.types";
import {AllInformationsRequest} from "./allInformations.request";
import {Pagination} from "../../pagination";
import {Information} from "../../../models/information.model";

export const allInformationsAction = createAction(AllInformationsActionTypes.GetAllInformationsAction,props<{
  requestData: AllInformationsRequest
}>());
export const allInformationsActionSuccess = createAction(AllInformationsActionTypes.GetAllInformationsActionSuccess, props<{
  responseData: ResponseData<Pagination<Information[]>>
}>());
export const allInformationsActionFailure = createAction(AllInformationsActionTypes.GetAllInformationsActionFailure, props<{ errors: any }>());
