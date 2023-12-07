import {Action, createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetMyAppealQuestionsActionTypes} from "./getMyAppealQuestions.action.types";
import {GetMyAppealQuestionsRequest} from "./getMyAppealQuestions.request";
import {Pagination} from "../../pagination";
import {Appeal} from "../../../models/appeal.model";

export const getMyAppealQuestionsAction = createAction(GetMyAppealQuestionsActionTypes.OnGetMyAppealQuestions, props<{ requestData: GetMyAppealQuestionsRequest }>());
export const getMyAppealQuestionsActionSuccess = createAction(GetMyAppealQuestionsActionTypes.OnGetMyAppealQuestionsSuccess, props<{
    responseData: ResponseData<Pagination<Appeal[]>>
}>());
export const getMyAppealQuestionsActionFailure = createAction(GetMyAppealQuestionsActionTypes.OnGetMyAppealQuestionsFailure, props<{ errors: any }>());
