import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../response_data";
import {SubjectActionTypes} from "./subject.action.types";
import {Subject} from "../../models/subject.model";

export const subjectGetAction = createAction(SubjectActionTypes.OnGetSubject);
export const subjectGetActionSuccess = createAction(SubjectActionTypes.OnGetSubjectSuccess, props<{
  responseData: ResponseData<Subject[]>
}>());
export const subjectGetActionFailure = createAction(SubjectActionTypes.OnGetSubjectFailure, props<{ errors: any }>());
