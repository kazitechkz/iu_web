import {createAction, props} from "@ngrx/store";
import {DetailExamActionTypes} from "./detail-exam.action.types";
import {ResponseData} from "../../../response_data";
import {AttemptSetting} from "../../../../models/attemptSetting.model";

export const GetDetailExamByIdAction = createAction(DetailExamActionTypes.OnGetDetailExamById, props<{id: number}>());
export const GetDetailExamByIdSuccess = createAction(DetailExamActionTypes.OnGetDetailExamByIdSuccess, props<{
    responseData: ResponseData<AttemptSetting>
}>());
export const GetDetailExamByIdFailure = createAction(DetailExamActionTypes.OnGetDetailExamByIdFailure, props<{ errors: any }>());
