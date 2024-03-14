import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetBattleStepQuestionsActionTypes} from "./getBattleStepQuestions.action.types";
import {BattleStepQuestion} from "../../../models/battleStepQuestion.model";

export const getBattleStepQuestionsAction = createAction(GetBattleStepQuestionsActionTypes.OnGetBattleStepQuestions,props<{requestData:string}>());
export const getBattleStepQuestionsActionSuccess = createAction(GetBattleStepQuestionsActionTypes.OnGetBattleStepQuestionsSuccess, props<{
  responseData: ResponseData<BattleStepQuestion[]>
}>());
export const getBattleStepQuestionsActionFailure = createAction(GetBattleStepQuestionsActionTypes.OnGetBattleStepQuestionsFailure, props<{ errors: any }>());
