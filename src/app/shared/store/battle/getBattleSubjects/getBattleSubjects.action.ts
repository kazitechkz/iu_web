import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetBattleSubjectsActionTypes} from "./getBattleSubjects.action.types";
import {ProposeSubjectForBattleModel} from "../../../models/proposeSubjectForBattle.model";

export const getBattleSubjectsAction = createAction(GetBattleSubjectsActionTypes.OnGetBattleSubjects,props<{requestData:number}>());
export const getBattleSubjectsActionSuccess = createAction(GetBattleSubjectsActionTypes.OnGetBattleSubjectsSuccess, props<{
  responseData: ResponseData<ProposeSubjectForBattleModel>
}>());
export const getBattleSubjectsActionFailure = createAction(GetBattleSubjectsActionTypes.OnGetBattleSubjectsFailure, props<{ errors: any }>());
