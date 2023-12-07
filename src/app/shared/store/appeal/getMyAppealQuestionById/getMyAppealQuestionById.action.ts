import {Action, createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetMyAppealQuestionByIdActionTypes} from "./getMyAppealQuestionById.action.types";
import {GetMyAppealQuestionByIdRequest} from "./getMyAppealQuestionById.request";
import {Appeal} from "../../../models/appeal.model";

export const getMyAppealQuestionByIdAction = createAction(GetMyAppealQuestionByIdActionTypes.OnGetMyAppealQuestionById, props<{ requestData: GetMyAppealQuestionByIdRequest }>());
export const getMyAppealQuestionByIdActionSuccess = createAction(GetMyAppealQuestionByIdActionTypes.OnGetMyAppealQuestionByIdSuccess, props<{
    responseData: ResponseData<Appeal>
}>());
export const getMyAppealQuestionByIdActionFailure = createAction(GetMyAppealQuestionByIdActionTypes.OnGetMyAppealQuestionByIdFailure, props<{ errors: any }>());
