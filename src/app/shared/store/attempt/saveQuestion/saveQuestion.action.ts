import {SaveQuestionActionTypes} from "./saveQuestion.action.types";
import {SaveQuestionRequest} from "./saveQuestion.request";
import {ResponseData} from "../../response_data";
import {createAction, props} from "@ngrx/store";


export const onSaveQuestionAction  = createAction(SaveQuestionActionTypes.SaveQuestion,props<{requestData:SaveQuestionRequest}>());
export const onSaveQuestionActionSuccess  = createAction(SaveQuestionActionTypes.SaveQuestionSuccess,props<{ responseData: ResponseData<boolean>}>());
export const onSaveQuestionActionFailure = createAction(SaveQuestionActionTypes.SaveQuestionFailure, props<{ errors: any }>());
