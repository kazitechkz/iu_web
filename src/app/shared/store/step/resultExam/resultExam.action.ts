import {Action, createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {ResultExamActionTypes} from "./resultExam.action.types";
import {ResultExamRequest} from "./resultExam.request";
import {ResultExamModel} from "../../../models/resultExam.model";

export const resultExamAction = createAction(ResultExamActionTypes.OnResultExam, props<{ requestData: ResultExamRequest }>());
export const resultExamActionSuccess = createAction(ResultExamActionTypes.OnResultExamSuccess, props<{
    responseData: ResponseData<ResultExamModel>
}>());
export const resultExamActionFailure = createAction(ResultExamActionTypes.OnResultExamFailure, props<{ errors: any }>());
