import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../response_data";
import {SubjectActionTypes} from "./subject.action.types";
import {Subject} from "../../models/subject.model";

export const subjectGetAction = createAction(SubjectActionTypes.OnGetSubject);
export const subjectGetActionSuccess = createAction(SubjectActionTypes.OnGetSubjectSuccess, props<{
  responseData: ResponseData<Subject[]>
}>());
export const subjectGetActionFailure = createAction(SubjectActionTypes.OnGetSubjectFailure, props<{ errors: any }>());

export const subjectsWithoutRequiredGetAction = createAction(SubjectActionTypes.OnGetSubjectsWithoutRequired);
export const subjectsWithoutRequiredGetActionSuccess = createAction(SubjectActionTypes.OnGetSubjectsWithoutRequiredSuccess, props<{
  responseData: ResponseData<Subject[]>
}>());
export const subjectsWithoutRequiredGetActionFailure = createAction(SubjectActionTypes.OnGetSubjectsWithoutRequiredFailure, props<{ errors: any }>());
