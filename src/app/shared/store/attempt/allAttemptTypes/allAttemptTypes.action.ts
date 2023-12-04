import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {AllAttemptTypesActionTypes} from "./allAttemptTypes.action.types";
import {AttemptType} from "../../../models/attemptType.model";

export const allAttemptTypesAction = createAction(AllAttemptTypesActionTypes.OnAllAttemptTypes);
export const allAttemptTypesActionSuccess = createAction(AllAttemptTypesActionTypes.OnAllAttemptTypesSuccess, props<{
  responseData: ResponseData<AttemptType[]>
}>());
export const allAttemptTypesActionFailure = createAction(AllAttemptTypesActionTypes.OnAllAttemptTypesFailure, props<{ errors: any }>());
