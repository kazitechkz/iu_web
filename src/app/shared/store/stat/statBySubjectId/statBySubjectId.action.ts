import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {StatBySubjectIdActionTypes} from "./statBySubjectId.action.types";
import {StatBySubjectIdModel} from "./statBySubjectId.action.model";


export const statBySubjectIdAction = createAction(StatBySubjectIdActionTypes.OnGetStatBySubjectId, props<{
  requestData: number
}>());
export const StatBySubjectIdSuccessAction = createAction(StatBySubjectIdActionTypes.OnGetStatBySubjectIdSuccess, props<{
  responseData: ResponseData<StatBySubjectIdModel>
}>());
export const StatBySubjectIdFailureAction = createAction(StatBySubjectIdActionTypes.OnGetStatBySubjectIdFailure, props<{ errors: any }>());
