import {createAction, props} from "@ngrx/store";
import {ExamsActionTypes} from "./exams.action.types";
import {ResponseData} from "../../response_data";


export const deleteExamByIdAction = createAction(ExamsActionTypes.OnDeleteExamById, props<{id: number}>());
export const deleteExamByIdSuccess = createAction(ExamsActionTypes.OnDeleteExamByIdSuccess, props<{
    responseData: ResponseData<boolean>
}>());
export const deleteExamByIdFailure = createAction(ExamsActionTypes.OnDeleteExamByIdFailure, props<{ errors: any }>());
