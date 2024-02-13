import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {MyCareerAttemptsActionTypes} from "./myCareerAttempts.action.types";
import {MyCareerAttemptsRequest} from "./myCareerAttempts.request";
import {Pagination} from "../../pagination";
import {CareerQuizAttempt} from "../../../models/careerQuizAttempt.model";

export const myCareerAttemptsAction = createAction(MyCareerAttemptsActionTypes.OnMyCareerAttempts,props<{requestData:MyCareerAttemptsRequest}>());
export const myCareerAttemptsActionSuccess = createAction(MyCareerAttemptsActionTypes.OnMyCareerAttemptsSuccess, props<{
  responseData: ResponseData<Pagination<CareerQuizAttempt[]>>
}>());
export const myCareerAttemptsActionFailure = createAction(MyCareerAttemptsActionTypes.OnMyCareerAttemptsFailure, props<{ errors: any }>());
