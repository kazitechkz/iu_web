import {Action, createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {Question} from "../../../models/question.model";
import {GetMySavedQuestionByIdActionTypes} from "./getMySavedQuestionById.action.types";
import {GetMySavedQuestionByIdRequest} from "./getMySavedQuestionById.request";

export const getMySavedQuestionByIdAction = createAction(GetMySavedQuestionByIdActionTypes.OnGetMySavedQuestionById, props<{ requestData: GetMySavedQuestionByIdRequest }>());
export const getMySavedQuestionByIdActionSuccess = createAction(GetMySavedQuestionByIdActionTypes.OnGetMySavedQuestionByIdSuccess, props<{
    responseData: ResponseData<Question>
}>());
export const getMySavedQuestionByIdActionFailure = createAction(GetMySavedQuestionByIdActionTypes.OnGetMySavedQuestionByIdFailure, props<{ errors: any }>());
