import {createReducer, on} from "@ngrx/store";
import {
  promoGetAction, promoGetActionFailure, promoGetActionSuccess, promoGetClearAction

} from "./promo.action";
import {promoState} from "./promo.state";

const _promoReducer = createReducer(
  promoState,
  on(promoGetAction, (state) => {
    return {
      ...state,
    }
  }),
  on(promoGetClearAction, (state) => {
    return {
      ...state,
      data: null
    }
  }),
  on(promoGetActionSuccess, (state, action) => {
    return {
      ...state,
      status: true,
      errors: null,
      data: action.responseData.data
    }
  }),
  on(promoGetActionFailure, (state, action) => {
    return {
      ...state,
      status: false,
      errors: action.errors
    }
  })
);

export function promoReducer(state: any, action: any) {
  return _promoReducer(state, action);
}

