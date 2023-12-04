import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {FullStatActionTypes} from "./fullStat.action.types";
import {FullStatRequest} from "./fullStat.request";
import {FullStatModel} from "./fullStat.model";


export const fullStatAction = createAction(FullStatActionTypes.OnFullStat, props<{
  requestData: FullStatRequest
}>());
export const fullStatSuccessAction = createAction(FullStatActionTypes.OnFullStatSuccess, props<{
  responseData: ResponseData<FullStatModel>
}>());
export const fullStatFailureAction = createAction(FullStatActionTypes.OnFullStatFailure, props<{ errors: any }>());
