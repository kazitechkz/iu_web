import {Action, createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetMySavedQuestionsActionTypes} from "./getMySavedQuestions.action.types";
import {GetMySavedQuestionsRequest} from "./getMySavedQuestions.request";
import {Pagination} from "../../pagination";
import {Question} from "../../../models/question.model";

export const getMySavedQuestionsAction = createAction(GetMySavedQuestionsActionTypes.OnGetMySavedQuestions, props<{ requestData: GetMySavedQuestionsRequest }>());
export const getMySavedQuestionsActionSuccess = createAction(GetMySavedQuestionsActionTypes.OnGetMySavedQuestionsSuccess, props<{
    responseData: ResponseData<Pagination<Question[]>>
}>());
export const getMySavedQuestionsActionFailure = createAction(GetMySavedQuestionsActionTypes.OnGetMySavedQuestionsFailure, props<{ errors: any }>());
