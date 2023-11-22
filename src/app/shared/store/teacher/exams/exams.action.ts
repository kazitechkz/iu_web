import {createAction, props} from "@ngrx/store";
import {ExamsActionTypes} from "./exams.action.types";
import {ResponseData} from "../../response_data";


export const deleteExamByIdAction = createAction(ExamsActionTypes.OnDeleteExamById, props<{id: number}>());
export const deleteExamByIdSuccess = createAction(ExamsActionTypes.OnDeleteExamByIdSuccess, props<{
    responseData: ResponseData<boolean>
}>());
export const deleteExamByIdFailure = createAction(ExamsActionTypes.OnDeleteExamByIdFailure, props<{ errors: any }>());

export const deleteUNTExamByIdAction = createAction(ExamsActionTypes.OnDeleteUNTExamById, props<{id: number}>());
export const deleteUNTExamByIdSuccess = createAction(ExamsActionTypes.OnDeleteUNTExamByIdSuccess, props<{
    responseData: ResponseData<boolean>
}>());
export const deleteUNTExamByIdFailure = createAction(ExamsActionTypes.OnDeleteUNTExamByIdFailure, props<{ errors: any }>());
