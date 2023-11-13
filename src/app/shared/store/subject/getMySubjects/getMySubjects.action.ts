import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetMySubjectsActionTypes} from "./getMySubjects.action.types";
import {Subject} from "../../../models/subject.model";

export const getMySubjectsAction = createAction(GetMySubjectsActionTypes.GetMySubjects);
export const getMySubjectsActionSuccess = createAction(GetMySubjectsActionTypes.GetMySubjectsSuccess, props<{
  responseData: ResponseData<Subject[]>
}>());
export const getMySubjectsActionFailure = createAction(GetMySubjectsActionTypes.GetMySubjectsFailure, props<{ errors: any }>());
