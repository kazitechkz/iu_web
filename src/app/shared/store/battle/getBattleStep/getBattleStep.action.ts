import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetBattleStepActionTypes} from "./getBattleStep.action.types";
import {GivenBattleQuestionModel} from "../../../models/givenBattleQuestion.model";

export const getBattleStepAction = createAction(GetBattleStepActionTypes.OnGetBattleStep,props<{requestData:number}>());
export const getBattleStepActionSuccess = createAction(GetBattleStepActionTypes.OnGetBattleStepSuccess, props<{
  responseData: ResponseData<GivenBattleQuestionModel>
}>());
export const getBattleStepActionFailure = createAction(GetBattleStepActionTypes.OnGetBattleStepFailure, props<{ errors: any }>());
