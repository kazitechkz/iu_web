import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetInformationsByCategoryActionTypes} from "./getInformationsByCategory.action.types";
import {GetInformationsByCategoryRequest} from "./getInformationsByCategory.request";
import {Pagination} from "../../pagination";
import {Information} from "../../../models/information.model";

export const getInformationsByCategoryAction = createAction(GetInformationsByCategoryActionTypes.GetInformationsByCategoryAction,props<{
  requestData: GetInformationsByCategoryRequest
}>());
export const getInformationByCategoryActionSuccess = createAction(GetInformationsByCategoryActionTypes.GetInformationsByCategoryActionSuccess, props<{
  responseData: ResponseData<Pagination<Information[]>>
}>());
export const getInformationByCategoryActionFailure = createAction(GetInformationsByCategoryActionTypes.GetInformationsByCategoryActionFailure, props<{ errors: any }>());
