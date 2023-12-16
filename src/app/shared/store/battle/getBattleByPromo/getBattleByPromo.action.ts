import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../../response_data";
import {GetBattleByPromoActionTypes} from "./getBattleByPromo.action.types";
import {Battle} from "../../../models/battle.model";

export const getBattleByPromoAction = createAction(GetBattleByPromoActionTypes.OnGetBattleByPromo,props<{requestData:string}>());
export const getBattleByPromoActionSuccess = createAction(GetBattleByPromoActionTypes.OnGetBattleByPromoSuccess, props<{
  responseData: ResponseData<Battle>
}>());
export const getBattleByPromoActionFailure = createAction(GetBattleByPromoActionTypes.OnGetBattleByPromoFailure, props<{ errors: any }>());
