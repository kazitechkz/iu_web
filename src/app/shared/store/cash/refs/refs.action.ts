import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {RefsActionTypes} from "./refs.action.types";
import {RefsRequest} from "./refs.request";
import {RefsModel} from "./refs.model";

export const refsAction = createAction(RefsActionTypes.Refs);
export const refsActionSuccess = createAction(RefsActionTypes.RefsSuccess, props<{
  responseData: ResponseData<RefsModel>
}>());
export const refsActionFailure = createAction(RefsActionTypes.RefsFailure, props<{
  errors: any
}>());
