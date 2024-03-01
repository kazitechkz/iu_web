import {createAction, props} from "@ngrx/store";
import {ResponseData} from "../response_data";
import {PromoActionTypes} from "./promo.action.types";
import {PromoRequest} from "./promo.request";

export const promoGetAction = createAction(PromoActionTypes.OnGetPromo, props<{ req: PromoRequest }>());
export const promoGetActionSuccess = createAction(PromoActionTypes.OnGetPromoSuccess, props<{
  responseData: ResponseData<number>
}>());
export const promoGetActionFailure = createAction(PromoActionTypes.OnGetPromoFailure, props<{ errors: any }>());
