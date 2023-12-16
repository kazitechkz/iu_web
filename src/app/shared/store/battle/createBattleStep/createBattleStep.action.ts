import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {CreateBattleStepActionTypes} from "./createBattleStep.action.types";
import {CreateBattleStepRequest} from "./createBattleStep.request";
import {GivenBattleQuestionModel} from "../../../models/givenBattleQuestion.model";

export const createBattleStepAction = createAction(CreateBattleStepActionTypes.OnCreateBattleStep,props<{requestData:CreateBattleStepRequest}>());
export const createBattleStepActionSuccess = createAction(CreateBattleStepActionTypes.OnCreateBattleStepSuccess, props<{
  responseData: ResponseData<GivenBattleQuestionModel>
}>());
export const createBattleStepActionFailure = createAction(CreateBattleStepActionTypes.OnCreateBattleStepFailure, props<{ errors: any }>());
