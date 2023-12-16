import {createReducer, on} from "@ngrx/store";
import {getBattleByPromoState} from "./getBattleByPromo.state";
import {
  getBattleByPromoAction,
  getBattleByPromoActionSuccess,
  getBattleByPromoActionFailure,
} from "./getBattleByPromo.action";

const _getBattleByPromoReducer = createReducer(
  getBattleByPromoState,
  on(getBattleByPromoAction, (state, action) => {
    return {
      ...state,
      data:null,
    }
  }),
  on(getBattleByPromoActionSuccess, (state, action) => {
    return {
      ...state,
      success: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(getBattleByPromoActionFailure, (state, action) => {
    return {
      ...state,
      success: false,
      errors: action.errors
    }
  })
);

export function getBattleByPromoReducer(state: any, action: any) {
  return _getBattleByPromoReducer(state, action);
}
