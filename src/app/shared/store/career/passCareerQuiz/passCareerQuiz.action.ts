import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {CareerQuiz} from "../../../models/careerQuiz.model";
import {PassCareerQuizActionTypes} from "./passCareerQuiz.action.types";
export const passCareerQuizActionClear = createAction(PassCareerQuizActionTypes.OnPassCareerQuizClear);

export const passCareerQuizAction = createAction(PassCareerQuizActionTypes.OnPassCareerQuiz,props<{requestData:number}>());
export const passCareerQuizActionSuccess = createAction(PassCareerQuizActionTypes.OnPassCareerQuizSuccess, props<{
  responseData: ResponseData<CareerQuiz>
}>());
export const passCareerQuizActionFailure = createAction(PassCareerQuizActionTypes.OnPassCareerQuizFailure, props<{ errors: any }>());
