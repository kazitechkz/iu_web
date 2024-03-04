import {Action, createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {SubStepExamActionTypes} from "./subStepExam.action.types";
import {Question, SubStepExamModel} from "../../../models/question.model";
import {SubStepExamRequest} from "./subStepExam.request";

export const subStepExamAction = createAction(SubStepExamActionTypes.OnSubStepExam, props<{ requestData: SubStepExamRequest }>());
export const subStepExamActionSuccess = createAction(SubStepExamActionTypes.OnSubStepExamSuccess, props<{
    responseData: ResponseData<SubStepExamModel[]>
}>());
export const subStepExamActionFailure = createAction(SubStepExamActionTypes.OnSubStepExamFailure, props<{ errors: any }>());

export const passSubStepExamAction = createAction(SubStepExamActionTypes.passSubStepExam, props<{ requestData: any }>());
export const passSubStepExamActionSuccess = createAction(SubStepExamActionTypes.passSubStepExamSuccess, props<{
    responseData: ResponseData<number>
}>());
export const passSubStepExamActionFailure = createAction(SubStepExamActionTypes.passSubStepExamFailure, props<{ errors: any }>());
