import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {HottestInformationActionTypes} from "./hottestInformation.action.types";
import {HottestInformationModel} from "./hottestInformation.model";

export const hottestInformationAction = createAction(HottestInformationActionTypes.GetHottestInformation);
export const hottestInformationActionSuccess = createAction(HottestInformationActionTypes.GetHottestInformationSuccess, props<{
  responseData: ResponseData<HottestInformationModel>
}>());
export const hottestInformationActionFailure = createAction(HottestInformationActionTypes.GetHottestInformationFailure, props<{ errors: any }>());
